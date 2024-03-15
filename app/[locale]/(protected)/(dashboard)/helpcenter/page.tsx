import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Tickets } from "@/constants/types";
import { lusitana } from "@/components/fonts";
import Search from "@/components/dashboard/search";
import { Suspense } from "react";
import { getI18n } from "@/locales/server";

async function getTickets(): Promise<Tickets[]> {
  const res = await fetch(
    "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
  );
  const data = await res.json();
  return data;
}
export default async function Page() {
  const data = await getTickets();
  const t = await getI18n();
  return (
    <Suspense fallback={"Loading..."}>
      <div className="border-radius mx-4 my-6 flex flex-row items-start rounded-lg bg-slate-100 px-6 py-4 md:flex-col">
        <p className="text">{t("helpcenter")}</p>
        <span>
          <DataTable columns={columns} data={data} />
        </span>
      </div>
    </Suspense>
  );
}
