import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetupPasswordSchema, setupPasswordSchema } from "./schema";
import { useSubmit } from "@remix-run/react";

export const PasswordSetupForm = () => {
  const resolver = zodResolver(setupPasswordSchema);
  const defaultValues: DefaultValues<SetupPasswordSchema> = {
    password: "",
    confirm_password: "",
  };
  const form = useForm<SetupPasswordSchema>({ resolver, defaultValues });
  const submit = useSubmit();

  const onSubmit = (data: SetupPasswordSchema) => {
    submit(data, {
      action: "/signup/choose-password",
      encType: "application/json",
      method: "POST",
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 w-[462px] mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-xl font-medium">Set your password</p>
        </div>
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="Password *" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirm_password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirm Password *"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="w-full font-medium">FINISH</Button>
        </div>
      </form>
    </Form>
  );
};
