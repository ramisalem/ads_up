import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/app/storeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADSUP Dashboard",
  description: "dashboard for ADSUP application",
};

export default async function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang={locale}>
        <body className={inter.className}>
          {/* <I18nProviderClient locale={locale}> */}
          <Toaster />
          <StoreProvider>
            {children} <SpeedInsights />
          </StoreProvider>
          {/* </I18nProviderClient> */}
        </body>
      </html>
    </SessionProvider>
  );
}
