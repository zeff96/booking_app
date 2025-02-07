"use server";

import { revalidateTag } from "next/cache";
import { verifySession } from "../lib/dal";
import { redirect } from "next/navigation";

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

export const fetchReservations = async () => {
  const { token } = await verifySession();

  try {
    const response = await fetch("http://127.0.0.1:3000/reservations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["reservations"] },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const reserveMotorcycle = async (state, formData) => {
  const { token } = await verifySession();

  //form data
  const date = formData.get("date");
  const city = formData.get("city");
  const motorcycle_id = formData.get("motorcycle");

  if (!date || !city || !motorcycle_id) {
    return {
      error: "All fields must be filled",
    };
  }

  const reserveData = {
    reservation: {
      date,
      city,
      motorcycle_id,
    },
  };

  try {
    const response = await fetch("http://127.0.0.1:3000/reservations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserveData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data?.error);
    }
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
    };
  }

  revalidateTag("reservations");
  redirect("/motorcycles/reservations");
};
