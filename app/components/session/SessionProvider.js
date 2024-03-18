import { SessionProvider } from "next-auth/react";

const SessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProvider;
