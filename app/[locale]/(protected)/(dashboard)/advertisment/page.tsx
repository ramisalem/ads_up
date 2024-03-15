import { getI18n } from "@/locales/server";
import { getAllStory } from "@/actions/advertisment";
import { Button } from "@/components/ui/button";

import { Key, Suspense } from "react";
import { AdvType } from "@/constants/types";
import AdvertTable from "@/components/dashboard/table";
export default async function Advertisment() {
  const t = await getI18n();
  const { data, error, isError } = await getAllStory();
  return (
    <Suspense fallback={"Loading..."}>
      <div className="border-radius mx-4 my-6 flex flex-row items-start rounded-lg bg-slate-100 px-6 py-4 md:flex-col">
        <p className="text">{t("advertisment")}</p>
        <span>
          {
            data && (
              // data.map((item: AdvType) => (
              <AdvertTable customers={data} />
            )
            // ))
          }
        </span>
      </div>
    </Suspense>
  );
}
