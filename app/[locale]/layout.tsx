import type { Metadata } from "next";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/app/storeProvider";
import { inter } from "@/components/fonts";
//import { SpeedInsights } from "@vercel/speed-insights/next";
//import { getCurrentLocale } from "@/locales/server";

export const metadata: Metadata = {
    title: "ADSUP Dashboard",
    description: "dashboard for ADSUP application",
};

export default async function RootLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal?: React.ReactNode;
}) {
    const session = await auth();
    //const locale = getCurrentLocale();
    return (
        <>
            <SessionProvider session={session}>
                <StoreProvider>
                    <html lang="en">
                        <body className={`${inter.className} antialiased`}>
                            <Toaster />
                            {children}
                            {modal}

                            <div id="modal-root" />
                            {/* <SpeedInsights /> */}
                        </body>
                    </html>
                </StoreProvider>
            </SessionProvider>
        </>
    );
}
