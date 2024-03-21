"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tickets } from "@/constants/types";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { ColumnDef } from "@tanstack/react-table";
//import { format } from "date-fns";
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
  // {
  //   accessorKey: "createdAt",
  //   header: "Created At",
  //   cell: ({ row }) => {
  //     let newDate = new Date(row.getValue("createdAt"));
  //     let formatted = newDate.toUTCString(); // format(newDate, "PPP");
  //     return <div className="text-center font-medium">{formatted}</div>;
  //   },
  // },
  // {
  //   accessorKey: "updatedAt",
  //   header: "Updated At",
  //   cell: ({ row }) => {
  //     let newDate = new Date(row.getValue("updatedAt"));
  //     let formatted = newDate.toUTCString(); // format(newDate, "PPP");
  //     return <div className="text-center font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MinusCircleIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(ticket.uuid);
                console.log({ ticket });
              }}>
              Copy Ticket ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Ticket</DropdownMenuItem>
            <DropdownMenuItem>Delete Ticket</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
