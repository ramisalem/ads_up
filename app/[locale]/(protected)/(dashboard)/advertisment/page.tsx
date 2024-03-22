import { getI18n } from "@/locales/server";
import { getAllAds } from "@/actions/advertisment";
import { Button } from "@/components/ui/button";

import { Suspense } from "react";

import AdvertTable from "@/components/dashboard/table";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
export default async function Advertisment() {
  const t = await getI18n();
  const { data, error, isError } = await getAllAds();
  return (
    // <Suspense fallback={"Loading..."}>
    <div className="container border-radius  my-6  md:w-full  items-start rounded-lg bg-slate-50 px-3 py-4 md:flex-col">
      <p className="text">{t("advertisment")}</p>
      <span>
        {
          data && (
            // data.map((item: AdvType) => (
            // <AdvertTable ads={data} />
            <DataTable columns={columns} data={data} />
          )
          // ))
        }
      </span>
    </div>
    // </Suspense>
  );
}
