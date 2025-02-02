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

export const SigninFormSchema = SignupFormSchema.pick({
  email: true,
  password: true,
});

const imageSchema = z
  .instanceof(File)
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/avif", "image/webp"].includes(
        file.type
      ),
    {
      message: "Invalid file type. Only JPEG, PNG, AVIF, and WEBP are allowed.",
    }
  );

export const MotorcycleSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast 2 characters long" })
    .trim(),
  bio: z
    .string()
    .min(8, "Description must atleast be 8 characters long")
    .trim(),
  image: imageSchema,
  financeFee: z
    .number()
    .int()
    .nonnegative()
    .refine((val) => Number.isInteger(val), {
      message: "Must be an integer",
    }),
  optionToPurchase: z
    .number()
    .int()
    .nonnegative()
    .refine((val) => Number.isInteger(val), { message: "Must be an integer" }),
  totalAmountPayable: z
    .number()
    .int()
    .nonnegative()
    .refine((val) => Number.isInteger(val), { message: "Must be an integer" }),
  duration: z
    .number()
    .int()
    .nonnegative()
    .refine((val) => Number.isInteger(val), { message: "Must be an integer" }),
});
