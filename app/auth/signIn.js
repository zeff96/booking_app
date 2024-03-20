export const signIn = async (provider, formData) => {
  switch (provider) {
    case "credentials":
      return await authenticateUser(formData);

    default:
      throw error("Unknow provider " + provider);
  }
};

const authenticateUser = async (userObj) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
