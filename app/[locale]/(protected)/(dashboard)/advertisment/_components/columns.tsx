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
import { AdvType } from "@/constants/types";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
//import { format } from "date-fns";

export const columns: ColumnDef<AdvType>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "categoryId",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "images",
    header: "Images",
    cell: ({ row }) => {
      let imageUrl: string = row.getValue("images");
      let title = row.getValue("title");
      return (
        <div className="flex items-center gap-3">
          <Image
            src={imageUrl}
            className="rounded-full"
            alt={`${title}'s profile picture`}
            width={28}
            height={28}
          />
        </div>
      );
    },
  },
  // {
  //   accessorKey: "Start",
  //   header: "Start",
  //   cell: ({ row }) => {
  //     let newDate = new Date(row.getValue("start"));
  //     let formatted = newDate.toUTCString(); // format(newDate, "PPP");
  //     return <div className="text-center font-medium">{formatted}</div>;
  //   },
  // },
  {
    accessorKey: "end",
    header: "End",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("end"));
      let formatted = newDate.toUTCString(); // format(newDate, "PPP");
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const report = row.original;

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
                navigator.clipboard.writeText(report.uuid);
                console.log({ report });
              }}>
              Copy Report Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Report</DropdownMenuItem>
            <DropdownMenuItem>Delete Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
