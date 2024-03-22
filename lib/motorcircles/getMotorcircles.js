import { cookies } from "next/headers";

export async function getMotorcircles() {
  const token = cookies().get("token")?.value;
  try {
    let res = await fetch("http://localhost:3000/motorcircles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
    });

    let data = await res.json();
    return data;
  } catch (error) {
    return error?.message;
  }
}
