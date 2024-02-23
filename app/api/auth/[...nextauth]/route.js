import nextAuth from "next-auth";
import { options } from "./options";

let handler = nextAuth(options);

export { handler as GET, handler as POST };
