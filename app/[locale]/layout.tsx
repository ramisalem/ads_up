import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { I18nProviderClient } from "../../locales/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADSUP Dashboard",
  description: "we will create here",
};

export default async function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) console.log("session_in_layout");

  return (
    <SessionProvider session={session}>
      <html lang={locale}>
        <body className={inter.className}>
          <I18nProviderClient locale={locale}>
            <Toaster />
            {children}
          </I18nProviderClient>
        </body>
      </html>
    </SessionProvider>
  );
}
