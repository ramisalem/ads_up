"use client";

import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AdsStatuses, CouponStatuses, TicketStatuses } from "./statuses";
import { DataTableFacetedFilter } from "./data-table-filtered";
import { DebouncedInput } from "./decbunce-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

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

  const [searchDate, setSearchDate] = useState(null);
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
        {type == "ads" ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-[220px] pl-3 text-left font-normal">
                <span className="text-muted-foreground">
                  {searchDate ? searchDate : "Pick a date to filter"}
                </span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <DebouncedInput
                type="date"
                debounce={1000}
                placeholder="filter by start date"
                value={
                  (table.getColumn("start")?.getFilterValue() as string) ?? ""
                }
                onChange={(value: any) => {
                  setSearchDate(value);
                  table.getColumn("start")?.setFilterValue(value);
                }}
              />
            </PopoverContent>
          </Popover>
        ) : (
          <></>
        )}
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
            onClick={() => {
              table.resetColumnFilters();
              setSearchDate(null);
            }}
            className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
