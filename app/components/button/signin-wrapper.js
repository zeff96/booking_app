"use client";
import { useRouter } from "next/navigation";

export const SigninWrapperButton = ({ children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  return <span onClick={onClick}>{children}</span>;
};
