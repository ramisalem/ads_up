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
import { Coupons } from "@/constants/types";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Coupons>[] = [
  // {
  //   accessorKey: "id",
  //   header: "Id",
  // },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "usage",
    header: "Usage",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "precentage",
    header: "Precentage",
  },

  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "start",
    header: "Start",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("start"));

      let formatted = newDate.toLocaleDateString();
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "end",
    header: "End",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("end"));
      let formatted = newDate.toLocaleDateString();
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const coupon = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MinusCircleIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(coupon.uuid);
                console.log(coupon.uuid);
              }}>
              Copy Coupon ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Coupon</DropdownMenuItem>
            <DropdownMenuItem>Delete Coupon</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
