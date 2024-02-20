"use server";
import { signIn } from "@/auth/auth";

export async function authenticate(formData) {
  console.log(formData);
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}
