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
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";
//import { format } from "date-fns";

export const columns: ColumnDef<AdvType, any>[] = [
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
  {
    accessorKey: "start",
    header: "Start",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("start"));
      let formatted = format(newDate, "PPP");
      return <div className="text-center font-medium">{formatted}</div>;
    },
    filterFn: (row, columnId, value) => {
      const date = new Date(row.getValue(columnId));

      if (!(date instanceof Date)) {
        console.error(
          `Value of column "${columnId}" is expected to be a date, but got ${date}`
        );
        return false;
      }

      const start = value.from;
      const end = value.to;

      if (
        !(start instanceof Date || start === undefined) ||
        !(end instanceof Date || end === undefined)
      ) {
        console.error(
          `Filter value of column "${columnId}" is expected to be an array of two dates, but got ${value}`
        );
        return false;
      }

      // If one filter defined and date is undefined, filter it
      if ((start || end) && !date) {
        return false;
      }

      if (start && !end) {
        return date.getTime() >= start.getTime();
      } else if (!start && end) {
        return date.getTime() <= end.getTime();
      } else if (start && end) {
        return (
          date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
        );
      }

      return true;
    },
  },

  {
    accessorKey: "end",
    header: "End",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("end"));
      let formatted = format(newDate, "PPP");
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
              <DotsHorizontalIcon className="h-4 w-4" />
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
