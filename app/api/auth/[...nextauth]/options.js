import Credentials from "next-auth/providers/credentials";

export const options = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        let res = await fetch("http:localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: { email: credentials.email, password: credentials.password },
          }),
        });

        let data = await res.json();
        let user = data.user;

        if (res.ok) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
