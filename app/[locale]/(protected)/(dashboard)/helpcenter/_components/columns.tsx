"use client";
import { Tickets } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Tickets>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("createdAt"));
      let formatted = newDate.toLocaleString();
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
];
