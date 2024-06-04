"use client";
import { useI18n } from "@/locales/client";
//import { getAllAds } from '@/actions/advertisment';
import { fetchAds } from "@/redux/slices/adsSlice";
import { useEffect } from "react";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import Loader from "@/components/dashboard/loader";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

export default function Advertisment() {
    const t = useI18n();
    const { adsList, error, hasError, isLoading } = useAppSelector((state) => state.ads);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAds());
    }, []);

    return (
        <div className=" border-radius my-6  md:w-full  py-4 px-[0.25rem] items-start rounded-md  md:flex-col">
            <p className="text">{t("advertisment")}</p>
            <div>
                {isLoading && !adsList ? (
                    <Loader />
                ) : adsList && adsList.length >= 1 ? (
                    <DataTable columns={columns} data={adsList} />
                ) : hasError ? (
                    <span>
                        {hasError && (
                            <p className="text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center  text-sm text-destructive">
                                Error: {error}
                            </p>
                        )}
                    </span>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}
