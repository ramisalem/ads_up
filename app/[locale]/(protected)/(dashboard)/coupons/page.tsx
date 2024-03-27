"use client";
import { CouponsDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

//import { getI18n } from "@/locales/server";
import { useI18n } from "@/locales/client";

import { useRef } from "react";
import { AddCouponButton } from "@/components/dashboard/add-coupon-button";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppStore } from "@/hooks/hooks";
import { getALLCoupons } from "@/redux/slices/couponsSlice";
import Loader from "@/components/dashboard/loader";

export default function Page() {
  //const data = await getCoupons();
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(getALLCoupons());
    initialized.current = true;
  }
  //const name = useAppSelector(state => state.coupons.couponsList)
  const { couponsList, isLoading } = useAppSelector((state) => state.coupons);
  // const t = await getI18n();
  const t = useI18n();
  return (
    // <Suspense fallback={"...loading"}>
    <div className="container border-radius my-6  md:w-full  items-start rounded-lg bg-slate-50 px-6 py-4 md:flex-col">
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
        ) : (
          <CouponsDataTable columns={columns} data={couponsList} />
        )}
      </span>
    </div>
    // </Suspense>
  );
}
