import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be atleat 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain atleast one letter." })
    .regex(/[0-9]/, { message: "Contain altleast one number." })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain atleat one special character" })
    .trim(),
  password_confirmation: z
    .string()
    .min(8, { message: "Be atleat 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain atleast one letter." })
    .regex(/[0-9]/, { message: "Contain altleast one number." })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain atleat one special character" })
    .trim(),
});
