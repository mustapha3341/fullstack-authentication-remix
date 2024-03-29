import * as z from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string(),
    confirm_password: z.string(),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "Passwords do not match",
      });
    }
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
