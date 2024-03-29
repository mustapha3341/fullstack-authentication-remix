import { Link, Outlet } from "@remix-run/react";
import { DotIcon } from "lucide-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();
  console.log({ formData });
  return null;
};

export default function SignupRoute() {
  return (
    <main className="flex h-screen">
      <div className="h-full w-[62.5%] flex flex-col justify-between pt-[54px] px-[55px] pb-4">
        <Link to="/">
          <img src="/sr-logo.png" alt="" />
        </Link>
        <div>
          <Outlet />
          <Link to="/login">
            <Button
              type="button"
              className="bg-gray-900 flex hover:bg-gray-700 text-white w-[462px] mx-auto mt-6"
            >
              BACK TO LOGIN
            </Button>
          </Link>
        </div>
        <p className="whitespace-nowrap flex items-center justify-center text-sm">
          <span>Terms and conditions</span> <DotIcon />{" "}
          <span>Privacy policy</span>
        </p>
      </div>
      <div className="h-full w-[37.5%] bg-[#0057FF] p-10 flex">
        <p className="text-white text-xl text-right mt-auto ml-auto">
          <span className="font-bold">Social</span>Repeat
        </p>
      </div>
    </main>
  );
}
