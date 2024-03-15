import { getI18n } from "@/locales/server";
import { getAllAds } from "@/actions/advertisment";
import { Button } from "@/components/ui/button";

import { Suspense } from "react";

import AdvertTable from "@/components/dashboard/table";
export default async function Advertisment() {
  const t = await getI18n();
  const { data, error, isError } = await getAllAds();
  return (
    <Suspense fallback={"Loading..."}>
      <div className="border-radius mx-4 my-6 flex flex-row items-start rounded-lg bg-slate-100 px-6 py-4 md:flex-col">
        <p className="text">{t("advertisment")}</p>
        <span>
          {
            data && (
              // data.map((item: AdvType) => (
              <AdvertTable ads={data} />
            )
            // ))
          }
        </span>
      </div>
    </Suspense>
  );
}
