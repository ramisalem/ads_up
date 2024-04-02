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

  const [fdate, setDate] = useState<DateRange | undefined>({
    from: new Date("01-2-1990"),
    to: new Date(),
  });

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
              <Calendar
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
              />
              {/* <DebouncedInput
                type="date"
                debounce={2000}
                value={fdate?.from ? format(fdate.from, "LLL dd, y") : ""}
                onChange={(value) => {
                  if (isValidDate(value)) {
                    setDate((prevDate) => ({
                      ...prevDate,
                      from: value,
                    }));

                    table.getColumn("start")?.setFilterValue(fdate);
                  }
                }}
              />
              <DebouncedInput
                type="date"
                debounce={2000}
                value={fdate?.to ? format(fdate?.to, "LLL dd, y") : ""}
                onChange={(value) => {
                  if (isValidDate(value)) {
                    setDate((prevDate) => ({
                      ...prevDate,
                      from: fdate?.from,
                      to: value,
                    }));

                    table.getColumn("start")?.setFilterValue(fdate);
                  }
                }}
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
