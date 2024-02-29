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
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
