"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid Fields");
  }
  return { sucess: "Email and password are correct" };
};
