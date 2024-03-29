import * as z from "zod";

export const setupPasswordSchema = z
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

export type SetupPasswordSchema = z.infer<typeof setupPasswordSchema>;
