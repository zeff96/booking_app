"use server";

import { SignupFormSchema } from "@/app/lib/definitions";

export const signup = async (state, formData) => {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirmation: formData.get("password_confirmation"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password, password_confirmation } =
    validatedFields.data;

  const userData = {
    user: {
      username,
      email,
      password,
      password_confirmation,
    },
  };

  const response = await fetch("http://127.0.0.1:3000/auth/sign_up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  console.log(data);

  // if (!user) {
  //   return {
  //     message: "An error occurred while creating your account.",
  //   };
  // }
};
