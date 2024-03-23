"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Search from "@/components/dashboard/search";
import { lusitana } from "@/components/fonts";
import { DataTablePagination } from "@/components/dashboard/tables-components/data-table-pagination";
import { DataTableToolbar } from "@/components/dashboard/tables-components/data-table-toolbar";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CouponsDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex w-auto flex-col mx-auto  md:p-4">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        all Coupons
      </h1>
      <DataTableToolbar
        table={table}
        type="coupons"
        label="Filtered Coupons ..."
      />
      <div className="mt-6 flow-root w-full">
        <div className="overflow-x-auto">
          <div className="inline-block md:min-w-full align-middle">
            <div className="overflow-hidden w-full rounded-md bg-gray-400 p-2 md:pt-0">
              <Table className=" mb-2 w-full justify-stretch rounded-md bg-white p-4">
                <TableHeader className=" md:contents md:content-stretch justify-stretch md:min-w-full border-b pb-4 hover:bg-slate-200">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      className="border-1 border-slate-700 justify-center justify-self-center hover:p-5"
                      key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            className="border-1 border-slate-700 text-black"
                            key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        className="border-1 cursor-pointer content-center self-center border-black items-center hover:ring-2 hover:ring-blue"
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            className=" flex-row items-center justify-between border-b border-black py-3 mx-2 hover:py-4"
                            key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <DataTablePagination table={table} />
          </div>
        </div>
      </div>
    </div>
  );
}
