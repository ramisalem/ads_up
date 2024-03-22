import { CouponsDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { getI18n } from "@/locales/server";

import { getCoupons } from "@/actions/coupons";
import { Suspense } from "react";
import { AddCouponButton } from "@/components/dashboard/add-coupon-button";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const data = await getCoupons();
  const t = await getI18n();
  return (
    // <Suspense fallback={"...loading"}>
    <div className="container border-radius my-6  md:w-full  items-start rounded-lg bg-slate-50 px-6 py-4 md:flex-col">
      <div className="flex flex-row items-center justify-between">
        <p className="text">{t("coupon")}</p>
        <AddCouponButton asChild={true}>
          <Button variant="default">{t("add-coupn")}</Button>
          {/* <span className="inline-block bg-black rounded-md p-2 text-center text-white font-medium">
              {" "}
              {t("add-coupn")}
            </span> */}
        </AddCouponButton>
      </div>
      {/* <div className="flex flex-auto w-full"> */}
      <span>
        <CouponsDataTable columns={columns} data={data} />
      </span>
    </div>
    // </Suspense>
  );
}
