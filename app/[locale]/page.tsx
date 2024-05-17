import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { getI18n } from "../../locales/server";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  const t = await getI18n();
  return (
    <main className="flex h-full flex-col flex-grow items-center  p-4 bg-[#FFFFFF]">
      <div className="flex flex-col space-y-6  items-center  ">
        <div className="flex flex-col gap-6 items-center text-6xl font-semibold text-[#3c4fe0e7] w-full top-[30%] left-[50%] drop-shadow-md  ">
          {/* <h1 className="text-4xl font-semibold text-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3c4fe0e7] to-gray-100 !important drop-shadow-md m-auto">
            🔐 {t("auth")}
          </h1> */}
          <br />
          <div className="">
            <ADSUPLogo />
          </div>

          <p className="text-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3c4fe0e7] to-gray-100 !important text-lg">
            {t("auth-page")}
          </p>
        </div>

        <LoginButton asChild>
          <Button
            className="bg-[#4D61E3] hover:bg-blue-500  !important text-white w-full !important"
            size="lg">
            {t("sign")}
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
