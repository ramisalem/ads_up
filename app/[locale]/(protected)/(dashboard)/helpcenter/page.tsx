"use client";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { useI18n } from "@/locales/client";
import { useAppSelector, useAppStore } from "@/hooks/hooks";
import { getAllTickets } from "@/redux/slices/ticketsSlice";
import { useRef } from "react";
import Loader from "@/components/dashboard/loader";
// import { getTickets } from "@/actions/helpcenter";

export default function Page() {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(getAllTickets());
    initialized.current = true;
  }

  const { ticketsList, isLoading } = useAppSelector((state) => state.tickets);
  // const data = await getTickets();
  const t = useI18n();
  return (
    <div className="container relative border-radius my-6 md:mx-1 md:w-[99%]  py-4 px-[0.25rem] items-start rounded-lg bg-slate-50  md:flex-col">
      <p className="text">{t("helpcenter")}</p>
      <span>
        {isLoading ? (
          <Loader />
        ) : ticketsList.length >= 1 ? (
          <DataTable columns={columns} data={ticketsList} />
        ) : (
          //
          <p className="text text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-destructive">
            No Data
          </p>
        )}
      </span>
    </div>
  );
}
