"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AdsStatuses, CouponStatuses, TicketStatuses } from "./statuses";
import { DataTableFacetedFilter } from "./data-table-filtered";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  type?: string;
  label: string;
}

export function DataTableToolbar<TData>({
  table,
  type,
  label,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const statuses =
    type === "ads"
      ? AdsStatuses
      : type === "coupons"
      ? CouponStatuses
      : TicketStatuses;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={label}
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {type == "ads" ? (
          <Input
            type="date"
            placeholder="filter by date"
            value={(table.getColumn("end")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              console.log("data", event.target.value);
              table.getColumn("end")?.setFilterValue(event.target.value);
            }}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        ) : (
          <></>
        )} */}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
