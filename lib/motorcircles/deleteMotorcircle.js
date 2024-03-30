"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteMotorcircle(_prevState, formData) {
  const token = cookies().get("token")?.value;
  const id = formData.get("id");
  try {
    const res = await fetch(`http://localhost:3000/motorcircles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(await res.json().error);
    }
    revalidatePath("/motorcircles");
  } catch (error) {
    console.log(error);
  }
}
