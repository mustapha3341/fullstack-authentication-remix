import * as z from "zod";

export const signupSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  company_name: z.string(),
  country: z.string(),
  phone_number: z.string(),
  timezone: z.string(),
});

export type SignupSchema = z.infer<typeof signupSchema>;
