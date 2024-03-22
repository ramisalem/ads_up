import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { getI18n } from "../../locales/server";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  const t = await getI18n();
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-100">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}>
          🔐 {t("auth")}
        </h1>
        <p className="text-white text-lg">{t("auth-page")}</p>
        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              {t("sign")}
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
