import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { getI18n } from "@/locales/server";
import { getTickets } from "@/actions/helpcenter";

export default async function Page() {
  const data = await getTickets();
  const t = await getI18n();
  return (
    <div className="container border-radius md:mx-4 my-6  md:w-full  items-start rounded-lg bg-slate-100 px-6 py-4 md:flex-col">
      <p className="text">{t("helpcenter")}</p>
      <span>
        <DataTable columns={columns} data={data} />
      </span>
    </div>
  );
}
