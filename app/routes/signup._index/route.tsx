import { SignupForm } from "./signup-form";
import moment from "moment-timezone";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZones = moment.tz.names();

  return { data: { timezones: timeZones, defaultTimeZone } };
};

export default function SignupIndex() {
  const loaderData = useLoaderData<typeof loader>();
  const data = loaderData.data;

  return (
    <div>
      <SignupForm
        timezones={data.timezones}
        defaultTimeZone={data.defaultTimeZone}
      />
    </div>
  );
}
