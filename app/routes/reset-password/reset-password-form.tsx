import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema, resetPasswordSchema } from "./schema";
import { useSubmit } from "@remix-run/react";

export const ResetPasswordForm = () => {
  const resolver = zodResolver(resetPasswordSchema);
  const defaultValues: DefaultValues<ResetPasswordSchema> = {
    password: "",
    confirm_password: "",
  };
  const form = useForm<ResetPasswordSchema>({ resolver, defaultValues });
  const submit = useSubmit();

  const onSubmit = (data: ResetPasswordSchema) => {
    submit(data, {
      action: "/reset-password",
      encType: "application/json",
      method: "POST",
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 w-[345px] mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-xl font-medium">Reset your password</p>
          <p className="text-sm mt-2">Type in your new password</p>
        </div>
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="New password *"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Retry new password *"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="w-full">
            Next <ArrowRightIcon className="ml-3" size={18} />
          </Button>
        </div>
      </form>
    </Form>
  );
};
