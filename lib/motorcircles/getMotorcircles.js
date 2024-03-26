import { cookies } from "next/headers";

export async function getMotorcircles() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return "You need to login in before proceeding!";
  }

  try {
    let res = await fetch("http://localhost:3000/motorcircles", {
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

export async function getMotorcircleById(id) {
  const token = cookies().get("token")?.value;

  if (!token) {
    return "You need to login in before proceeding!";
  }

  try {
    const result = await fetch(`http://localhost:3000/motorcircles/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
    });
    let data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
