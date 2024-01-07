import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required and must be a valid email",
  }),
  password: z.string().min(3, {
    message: "Password is required",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required and must be a valid email",
  }),
  password: z.string().min(3, {
    message: "Minimun 6 characters required",
  }),
  name: z.string().min(3, {
    message: "Name must have at least 3 characters",
  }),
});
