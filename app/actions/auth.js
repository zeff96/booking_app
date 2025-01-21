"use server";

import { SigninFormSchema, SignupFormSchema } from "@/app/lib/definitions";
import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

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

  // const { user } = data;

  if (data.error) {
    return {
      message: data.error,
    };
  }

  // await createSession(user.id);
  // redirect("/motorcycles");
};

export const signin = async (state, formData) => {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const userData = {
    user: {
      email,
      password,
    },
  };

  const response = await fetch("http://127.0.0.1:3000/auth/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  const data = await response.json();
  // const { user } = data;

  if (data.error) {
    return {
      message: data.error,
    };
  }

  // createSession(user.id);
  // redirect("/motorcycles");
};

export const logout = async () => {
  deleteSession();
  redirect("/login");
};
