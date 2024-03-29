import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ArrowRightIcon } from "lucide-react";

import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ForgotPasswordSchema, forgotPasswordSchema } from "./schema";
import { useSubmit } from "@remix-run/react";

export const ForgotPasswodForm = () => {
  const resolver = zodResolver(forgotPasswordSchema);
  const defaultValues: DefaultValues<ForgotPasswordSchema> = { email: "" };
  const form = useForm<ForgotPasswordSchema>({ resolver, defaultValues });
  const submit = useSubmit();

  const onSubmit = (data: ForgotPasswordSchema) => {
    submit(data, {
      action: "/forgot-password",
      encType: "application/json",
      method: "POST",
    });
  };

  return (
    <Form {...form}>
      <form
        className="w-[345px] mx-auto flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-xl font-medium">Reset your password</p>
          <p className="text-sm mt-2">
            Type in your registered email address to reset password
          </p>
        </div>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email Address *" />
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
