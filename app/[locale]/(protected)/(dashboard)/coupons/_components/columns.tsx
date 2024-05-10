"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Coupons } from "@/constants/types";

import { ColumnDef } from "@tanstack/react-table";
import { CouponStatuses } from "@/components/dashboard/tables-components/statuses";
import { format } from "date-fns";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ChangeCouponStatusComponent from "./change-coupon-status-component";
export const columns: ColumnDef<Coupons>[] = [
  {
    accessorKey: "title",
    header: "title",
  },
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
    cell: ({ row }) => {
      const f_price = row.getValue("price") as number;
      // const formattedPrice = f_price.toLocaleString("en-SA", {
      //   style: "currency",
      //   currency: "SAR",
      // });
      return <div className="text-center font-medium">{f_price}</div>;
    },
  },
  {
    accessorKey: "percentage",
    header: "Percentage",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = CouponStatuses.find(
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
    accessorKey: "start",
    header: "Start Date",
    cell: ({ row }) => {
      let newDate = new Date(row.getValue("start"));
      console.log(typeof newDate);
      if (typeof newDate === ("Date" as string)) {
        let formatted = format(newDate, "PP");
        return <div className="text-center font-medium">{formatted}</div>;
      }
      return <div className="text-center font-medium">No Date</div>;
    },
  },
  {
    accessorKey: "end",
    header: "End Date",
    // cell: ({ row }) => {
    //   let newDate = new Date(row.getValue("end"));
    //   let formatted = format(newDate, "PPP"); // newDate.toLocaleDateString();
    //   return <div className="text-center font-medium">{formatted}</div>;
    // },
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
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <ChangeCouponStatusComponent coupon={coupon} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
