"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdUsers } from "@/constants/types";

import { ColumnDef } from "@tanstack/react-table";
import { UserStatus } from "@/components/dashboard/tables-components/statuses";
import { format } from "date-fns";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<AdUsers>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone No.",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "joinedDate",
        header: "Joined Date",
        cell: ({ row }) => {
            let newDate = new Date(row.getValue("joinedDate"));

            if (typeof newDate === ("Date" as string)) {
                let formatted = format(newDate, "PP");
                return <div className="text-center font-medium">{formatted}</div>;
            }
            return <div className="text-center font-medium">No Date</div>;
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = UserStatus.find(
                (status) => status.value === row.getValue("status"),
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
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">Nothing to show</DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
