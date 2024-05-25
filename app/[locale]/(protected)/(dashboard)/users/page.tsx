"use client";
import { useEffect } from "react";
import { UsersDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchUsers } from "@/redux/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Loader from "@/components/dashboard/loader";

export default function Page() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // if (!initialized.current) {
        dispatch(fetchUsers());
        // initialized.current = true;
        // }
    }, []);

    const { usersList, hasError, isLoading, error } = useAppSelector((state) => state.users);
    return (
        <div className="flex min-w-full ">
            <p>Users Page</p>
            {isLoading ? (
                <Loader />
            ) : usersList.length >= 1 ? (
                <UsersDataTable columns={columns} data={usersList} />
            ) : hasError ? (
                <p className="text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center  text-sm text-destructive">
                    {error}
                </p>
            ) : (
                <p className="text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center  text-sm text-destructive">
                    No Data
                </p>
            )}
        </div>
    );
}
