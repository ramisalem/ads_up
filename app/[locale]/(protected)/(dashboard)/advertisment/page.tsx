import { getI18n } from "@/locales/server";
import { getAllAds } from "@/actions/advertisment";

import { Suspense } from "react";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import Loader from "@/components/dashboard/loader";
export default async function Advertisment() {
  const t = await getI18n();
  const { data, error, isError } = await getAllAds();
  return (
    <Suspense fallback={<Loader />}>
      <div className=" border-radius my-6  md:w-full  py-4 px-[0.25rem] items-start rounded-md  md:flex-col">
        <p className="text">{t("advertisment")}</p>
        <span>
          {
            data && <DataTable columns={columns} data={data} />

            // ))
          }
        </span>
        <span>{isError && <p>{error}</p>}</span>
      </div>
    </Suspense>
  );
}
