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
  //const name = useAppSelector(state => state.coupons.couponsList)
  const { ticketsList, isLoading } = useAppSelector((state) => state.tickets);
  // const data = await getTickets();
  const t = useI18n();
  return (
    <div className="container border-radius  my-6  md:w-full  items-start rounded-lg bg-slate-50 px-6 py-4 md:flex-col">
      <p className="text">{t("helpcenter")}</p>
      <span>
        {isLoading ? (
          <Loader />
        ) : (
          <DataTable columns={columns} data={ticketsList} />
        )}
      </span>
    </div>
  );
}
