import { Button } from "~/components/ui/button";

export default function EmailConfirmation() {
  return (
    <main>
      <div className="w-[462px] mx-auto space-y-6">
        <div>
          <p className="text-xl font-medium">Confirm your email address</p>
          <p className="text-sm mt-1">
            Please check your email for the next step to signup.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <Button>CONTACT SUPPORT</Button>
          <Button className="bg-gray-900 flex hover:bg-gray-700 text-white">
            CONTINUE
          </Button>
        </div>
      </div>
    </main>
  );
}
