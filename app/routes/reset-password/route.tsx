import { Link } from "@remix-run/react";
import { DotIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ResetPasswordForm } from "./reset-password-form";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();
  console.log(formData);
  return null;
};

export default function ResetPasswordRoute() {
  return (
    <main className="flex flex-col justify-between h-screen pt-[54px] px-[55px] pb-4">
      <Link to="/">
        <img src="/sr-logo.png" alt="" />
      </Link>
      <div>
        <ResetPasswordForm />
        <Link to="/login">
          <Button
            type="button"
            className="bg-gray-900 flex hover:bg-gray-700 text-white w-[345px] mx-auto mt-6"
          >
            BACK TO LOGIN
          </Button>
        </Link>
      </div>
      <p className="whitespace-nowrap flex items-center justify-center text-sm">
        <span>Terms and conditions</span> <DotIcon />{" "}
        <span>Privacy policy</span>
      </p>
    </main>
  );
}
