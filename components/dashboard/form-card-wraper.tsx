"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScopedI18nUntyped } from "@/locales/client";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export const FormCardWrapper = ({
  children,
  headerLabel,
}: CardWrapperProps) => {
  const t = useScopedI18nUntyped("header");
  return (
    <Card className="md:w-[90%] w-[400px] mx-auto shadow-md">
      <CardHeader>
        <div className="md:w-full w-auto flex flex-col gap-y-4 items-center justify-center">
          <h1 className={cn("text-3xl font-semibold", font.className)}>
            {t(`${headerLabel}`)}
          </h1>
          <p className="text-muted-foreground text-sm">
            {" "}
            {t(`${headerLabel}`)}
          </p>
        </div>
        {/* <Header label={headerLabel} /> */}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
