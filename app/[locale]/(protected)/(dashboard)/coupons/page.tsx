import { CouponsDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { getI18n } from "@/locales/server";

import { getCoupons } from "@/actions/coupons";

export default async function Page() {
  const data = await getCoupons();
  const t = await getI18n();
  return (
    <div className="flex flex-wrap md:container border-radius mx-auto  rounded-lg bg-slate-100  py-4 md:flex-col">
      <p className="text">{t("coupon")}</p>

      <CouponsDataTable columns={columns} data={data} />
    </div>
  );
}
