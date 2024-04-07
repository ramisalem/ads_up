"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAppDispatch } from "@/hooks/hooks";
import { changecouponStatus } from "@/redux/slices/couponsSlice";
import { Coupons } from "@/constants/types";
import { useTransition } from "react";

interface changeCouponProps {
  coupon: Coupons;
}
export default function ChangeCouponStatusComponent({
  coupon,
}: changeCouponProps) {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          dispatch(changecouponStatus(coupon));
        });
      }}>
      change Status
    </DropdownMenuItem>
  );
}
