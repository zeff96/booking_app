"use server";

import { verifySession } from "@/app/lib/dal";
import { MotorcycleSchema } from "@/app/lib/definitions";
import { data } from "autoprefixer";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function getMotorcycles() {
  const session = await verifySession();
  const { token } = session;

  try {
    const response = await fetch("http://127.0.0.1:3000/motorcycles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
      next: { tags: ["motorcycles"] },
    });
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch data");
  }
}

export async function createMotorcycle(state, formData) {
  const session = await verifySession();
  const { token } = session;

  const validatedFields = MotorcycleSchema.safeParse({
    name: formData.get("name"),
    bio: formData.get("bio"),
    image: formData.get("image"),
    financeFee: +formData.get("financeFee"),
    optionToPurchase: +formData.get("optionToPurchase"),
    totalAmountPayable: +formData.get("totalAmountPayable"),
    duration: +formData.get("duration"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    name,
    bio,
    image,
    financeFee,
    optionToPurchase,
    totalAmountPayable,
    duration,
  } = validatedFields.data;

  const motorcycleData = new FormData();
  motorcycleData.append("motorcycle[name]", name);
  motorcycleData.append("motorcycle[bio]", bio);
  motorcycleData.append("motorcycle[image]", image);
  motorcycleData.append("motorcycle[finance_fee]", financeFee);
  motorcycleData.append("motorcycle[option_to_purchase]", optionToPurchase);
  motorcycleData.append("motorcycle[total_amount_payable]", totalAmountPayable);
  motorcycleData.append("motorcycle[duration]", duration);

  try {
    const response = await fetch("http://127.0.0.1:3000/motorcycles", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: motorcycleData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Bad request");
    }
  } catch (error) {
    return {
      error,
    };
  }

  revalidateTag("motorcycles");
  redirect("/motorcycles");
}
