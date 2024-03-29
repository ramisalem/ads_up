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

import { ColumnDef } from "@tanstack/react-table";
import { TicketStatuses } from "@/components/dashboard/tables-components/statuses";
import { DotsHorizontalIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { closeTickets } from "@/actions/helpcenter";
import CloseTicketComponent from "./close-ticket-component";
//import { format } from "date-fns";
export const columns: ColumnDef<Tickets>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = TicketStatuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const ticket = row.original;
      if (row.getValue("status") === "Opened")
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <DotsHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <CloseTicketComponent ticket={ticket} />

              {/* <DropdownMenuItem>View Ticket</DropdownMenuItem>
            <DropdownMenuItem>Delete Ticket</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        );

      return <CrossCircledIcon className="w-6 h-6 text-red-500" />;
    },
  },
];
