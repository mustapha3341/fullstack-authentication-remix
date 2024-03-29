import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { LogInIcon } from "lucide-react";

import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginSchema, loginSchema } from "./schema";
import { Link, useSubmit, useActionData } from "@remix-run/react";
import { action } from "./route";
import { useEffect } from "react";
import { toast } from "sonner";

export const LoginForm = () => {
  const resolver = zodResolver(loginSchema);
  const defaultValues: DefaultValues<LoginSchema> = { email: "", password: "" };
  const form = useForm<LoginSchema>({ resolver, defaultValues });
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();

  const onSubmit = (data: LoginSchema) => {
    submit(data, {
      action: "/login",
      encType: "application/json",
      method: "POST",
    });
  };

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 w-[345px] mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <p className="text-xl font-medium">Sign In</p>
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
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Password *" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full">
          <Button className="w-full font-medium">
            Login
            <LogInIcon className="ml-3" size={18} />
          </Button>
          <p className="mt-2 text-right text-sm">
            <Link to="/forgot-password">Forgot Password</Link>
          </p>
        </div>
        <div>
          <Link to="/signup">
            <Button
              type="button"
              className="w-full bg-gray-900 hover:bg-gray-700 text-white"
            >
              CREATE NEW ACCOUNT
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};
