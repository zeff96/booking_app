export const getUser = async ({ email, password }) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email, password } }),
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.res.data.error;
  }
};
