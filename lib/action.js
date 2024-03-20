"use server";
import { signIn } from "../app/auth/signIn";
import { cookies } from "next/headers";

export async function register(_prevState, formData) {
  let data = {
    user: {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"),
    },
  };

  try {
    const res = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { message } = await res.json();
    return { message: message };
  } catch (error) {
    return { message: error.message };
  }
}

export async function authenticate(_currentState, formData) {
  let data = {
    user: {
      email: formData.get("email"),
      password: formData.get("password"),
    },
  };

  try {
    const res = await signIn("credentials", data);

    const token = res;
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      path: "/",
    });

    return JSON.stringify({ token });
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignIn":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}
