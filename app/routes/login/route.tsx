import { json, Link, redirect } from "@remix-run/react";
import { LoginForm } from "./login-form";
import { DotIcon } from "lucide-react";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();
  const email = formData.email;
  const password = formData.password;

  const user = { email: "mustapha3341@gmail.com", password: "password" };

  if (email !== user.email || password !== user.password) {
    console.log("Not correct");
    return json(
      { error: "Invalid credentials" },
      { status: 400, statusText: "Unauthorized" }
    );
  }

  return redirect("/");
};

export default function LoginRoute() {
  return (
    <main className="h-screen flex">
      <div className="flex flex-col justify-between h-full w-[42.2%] pt-[54px] pl-[55px] pb-4">
        <Link to="/">
          <img src="/sr-logo.png" alt="" />
        </Link>
        <LoginForm />
        <p className="whitespace-nowrap flex items-center justify-center text-sm">
          <span>Terms and conditions</span> <DotIcon />{" "}
          <span>Privacy policy</span>
        </p>
      </div>
      <div className="h-full w-[57.8%] flex items-center justify-center bg-[#FAFAFB]">
        <img src="/login-promotion.png" alt="" />
      </div>
    </main>
  );
}
