"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { options } from "../../app/api/auth/[...nextauth]/options";

export async function create(_prevState, formData) {
  let session = await getServerSession(options);

  if (!session) {
    return "Aunthorized, please login to proceed!";
  }

  let token = session.user.accessToken;

  const formRawData = {
    motorcircle: {
      name: formData.get("name"),
      image: formData.get("image"),
      bio: formData.get("bio"),
      finance_fee: formData.get("finance_fee"),
      option_to_purchase: formData.get("option_to_purchase"),
      total_amount_payable: formData.get("total_amount_payable"),
      duration: formData.get("duration"),
    },
  };

  let res = await fetch("http://localhost:3000/motorcircles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formRawData),
  });

  if (res.ok) {
    revalidatePath("/motorcircles");
    return { message: "Motorcircle created successfully!" };
  }
}
