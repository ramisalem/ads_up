import { CouponsDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { getI18n } from "@/locales/server";

import { getCoupons } from "@/actions/coupons";

export default async function Page() {
  const data = await getCoupons();
  const t = await getI18n();
  return (
    <div className="container border-radius md:mx-4 my-6  md:w-full  items-start rounded-lg bg-slate-50 px-6 py-4 md:flex-col">
      <p className="text">{t("coupon")}</p>
      {/* <div className="flex flex-auto w-full"> */}
      <span>
        <CouponsDataTable columns={columns} data={data} />
      </span>
    </div>
  );
}
