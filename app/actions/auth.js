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

  if (response.ok) {
    return {
      message: data.message,
    };
  } else {
    return {
      message: data.error,
    };
  }
};

export const verifyAccount = async (state, formData) => {
  const token = formData.get("token");
  const userParams = {
    user: {
      token,
    },
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:3000/auth/account_confirmation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userParams),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        message: data.error,
      };
    }
  } catch (error) {
    return {
      message: "An unexpected error occurred. Please try again!",
    };
  }
  redirect("/auth/login");
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

  try {
    const response = await fetch("http://127.0.0.1:3000/auth/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      const {
        token,
        user: { id, role },
      } = data;

      await createSession(id, token, role);
    } else {
      return {
        message: data.error,
      };
    }
  } catch (error) {
    return {
      message: "An unexpected error occurred. Please try again!",
    };
  }

  redirect("/motorcycles");
};

export const logout = async () => {
  deleteSession();
  redirect("/auth/login");
};
