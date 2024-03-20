"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddCouponForm } from "@/components/dashboard/add-coupom-form";
import { useCurrentLocale } from "@/locales/client";

interface AddButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const AddCouponButton = ({
  children,
  mode = "modal",
  asChild,
}: AddButtonProps) => {
  //const router = useRouter();
  //const locale = useCurrentLocale();
  const onClick = () => {
    //router.push(`${locale}/auth/login`);
    //<AddCouponForm />;
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <AddCouponForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
