"use server";
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
