"use client";
import { CouponsDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

//import { getI18n } from "@/locales/server";
import { useI18n } from "@/locales/client";

import { useEffect, useRef } from "react";
import { AddCouponButton } from "@/components/dashboard/add-coupon-button";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppStore } from "@/hooks/hooks";
import { getALLCoupons } from "@/redux/slices/couponsSlice";
import Loader from "@/components/dashboard/loader";

export default function Page() {
  //const data = await getCoupons();
  const store = useAppStore();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      store.dispatch(getALLCoupons());
      initialized.current = true;
    }
  }, [initialized, store]);

  const { couponsList, isLoading, error } = useAppSelector(
    (state) => state.coupons
  );
  // const t = await getI18n();
  const t = useI18n();
  return (
    // <Suspense fallback={"...loading"}>
    <div className="container relative border-radius my-6 md:mx-1 md:w-[99%]  py-4 px-[0.25rem] items-start rounded-lg bg-slate-50  md:flex-col">
      <div className="flex flex-row items-center justify-between">
        <p className="text">{t("coupon")}</p>
        <AddCouponButton asChild={true}>
          <Button variant="default">{t("add-coupn")}</Button>
        </AddCouponButton>
      </div>
      {/* <div className="flex flex-auto w-full"> */}
      <span>
        {isLoading ? (
          <Loader />
        ) : couponsList.length >= 1 ? (
          <CouponsDataTable columns={columns} data={couponsList} />
        ) : (
          <p className="text text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-destructive">
            No Data
          </p>
        )}
      </span>
    </div>
  );
}
