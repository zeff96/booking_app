"use server";

import { revalidateTag } from "next/cache";
import { verifySession } from "../lib/dal";

export const fetchCities = async () => {
  const { token } = await verifySession();

  try {
    const response = await fetch("http://127.0.0.1:3000/cities", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("An error occurred. Please try again");
  }
};

export const reserveMotorcycle = async (userId, formData) => {
  const { token } = await verifySession();

  //form data
  const date = formData.get("date");
  const city = formData.get("city");
  const motorcycle = formData.get("motorcycle");

  if (!date || !city || !motorcycle) {
    return {
      errors: "All fields must be field",
    };
  }

  const reserveData = {
    reservation: {
      userId,
      date,
      city,
      motorcycle,
    },
  };

  console.log(reserveData);

  try {
    await fetch("", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reserveData),
    });
  } catch (error) {}

  revalidateTag("reservations");
};
