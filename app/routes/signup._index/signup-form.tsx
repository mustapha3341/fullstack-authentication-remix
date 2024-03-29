import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupSchema } from "./schema";
import { useSubmit } from "@remix-run/react";

type Props = {
  timezones: Array<string>;
  defaultTimeZone: string;
};

export const SignupForm = (props: Props) => {
  const { timezones, defaultTimeZone } = props;

  const resolver = zodResolver(signupSchema);
  const defaultValues: DefaultValues<SignupSchema> = {
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    country: "",
    phone_number: "",
    timezone: defaultTimeZone,
  };
  const form = useForm<SignupSchema>({ resolver, defaultValues });
  const submit = useSubmit();

  const onSubmit = (data: SignupSchema) => {
    submit(data, {
      action: "/signup",
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
        <p className="text-xl font-medium">Sign up to socialRepeat</p>
        <div className="flex items-center gap-6">
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input {...field} placeholder="First Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="last_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input {...field} placeholder="Last Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email Address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="company_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Company Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-6">
          <FormField
            name="country"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                    <SelectItem value="United States">United States</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone_number"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input {...field} placeholder="+2341234567890" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="timezone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timezones.map((timezone) => (
                    <SelectItem key={timezone} value={timezone}>
                      {timezone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="w-full">SIGN UP</Button>
        </div>
      </form>
    </Form>
  );
};
