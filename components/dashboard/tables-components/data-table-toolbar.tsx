"use client";

import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AdsStatuses, CouponStatuses, TicketStatuses } from "./statuses";
import { DataTableFacetedFilter } from "./data-table-filtered";
import { DebouncedInput } from "./decbunce-input";
import { DateRange, DayPicker } from "react-day-picker";
import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn, isValidDate } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { DateRangePicker } from "../date-range-picker/date-range-picker";

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
  // console.log(table.getState().columnFilters);
  const statuses =
    type === "ads"
      ? AdsStatuses
      : type === "coupons"
      ? CouponStatuses
      : TicketStatuses;

  const [fdate, setDate] = useState<DateRange | undefined>({
    from: new Date("01-2-1990"),
    to: new Date(),
  });

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <DebouncedInput
          type="text"
          placeholder={label}
          debounce={2000}
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(value) => {
            table.getColumn("title")?.setFilterValue(value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {type == "ads" ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !fdate && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fdate?.from ? (
                  fdate.to ? (
                    <>
                      {format(fdate.from, "LLL dd, y")} -{" "}
                      {format(fdate.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(fdate.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <DateRangePicker
                onUpdate={(values) => {
                  setDate(values.range);
                  if (values.range?.to !== undefined) {
                    // console.log("value.to is ", value?.to);
                    table.getColumn("start")?.setFilterValue(values.range);
                  }
                }}
                initialDateFrom={fdate?.from}
                initialDateTo={fdate?.to ?? ""}
                align="start"
                locale="en-US"
                showCompare={false}
              />
              {/* <Calendar
                initialFocus
                mode="range"
                selected={fdate}
                onSelect={(value) => {
                  // console.log("value in onChange", value);
                  setDate(value);
                  if (value?.to !== undefined) {
                    // console.log("value.to is ", value?.to);
                    table.getColumn("start")?.setFilterValue(fdate);
                  }
                }}
                numberOfMonths={2}
              /> */}
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
              setDate({ from: new Date() });

              table.resetColumnFilters();
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
