import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required and must be a valid email",
  }),
  password: z.string().min(3, {
    message: "Password is required",
  }),
});
