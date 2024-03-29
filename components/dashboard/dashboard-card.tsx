"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  Icon: React.ReactNode;
}

export const DashboardCardWrapper = ({
  children,
  headerLabel,
  Icon,
}: CardWrapperProps) => {
  return (
    <Card className="md:w-[350px] shadow-md">
      <CardHeader className="w-full flex flex-row gap-y-4 items-center justify-between">
        <h1 className="text-2xl font-semibold">{headerLabel}</h1>
        {Icon}
      </CardHeader>
      <Separator className="bg-gray-50 w-full h-1" />
      <CardContent className="p-2">{children}</CardContent>

      <CardFooter>
        <p>{headerLabel}</p>
      </CardFooter>
    </Card>
  );
};
