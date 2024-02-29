import Credentials from "next-auth/providers/credentials";
import { getUser } from "../../../../lib/user/getUser";

export const options = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        let user = await getUser(credentials);

        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.sub = user.user.id),
          (token.name = user.user.username),
          (token.email = user.user.email),
          (token.accessToken = user.token);
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
