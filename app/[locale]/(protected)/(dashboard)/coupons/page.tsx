'use client';
import { CouponsDataTable } from './_components/data-table';
import { columns } from './_components/columns';
//import { getI18n } from "@/locales/server";
import { useI18n } from '@/locales/client';
import { useEffect, useRef } from 'react';
import { AddCouponButton } from '@/components/dashboard/add-coupon-button';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { getALLCoupons } from '@/redux/slices/couponsSlice';
import Loader from '@/components/dashboard/loader';

export default function Page() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // if (!initialized.current) {
        dispatch(getALLCoupons());
        // initialized.current = true;
        // }
    }, []);

    const { couponsList, isLoading, error } = useAppSelector((state) => state.coupons);
    // const t = await getI18n();
    const t = useI18n();
    return (
        <div className="border-radius my-6  md:w-full  py-4 px-[0.25rem] items-start rounded-md  md:flex-col">
            <div className="flex flex-row items-center justify-between mb-2">
                <p className="text">{t('coupon')}</p>
                <AddCouponButton asChild={true}>
                    <Button variant="default">{t('add-coupn')}</Button>
                </AddCouponButton>
            </div>
            {/* <div className="flex flex-auto w-full"> */}
            <div>
                {isLoading ? (
                    <Loader />
                ) : couponsList.length >= 1 ? (
                    <CouponsDataTable columns={columns} data={couponsList} />
                ) : (
                    <p className="text-center bg-destructive/15 p-3 rounded-md flex justify-center items-center  text-sm text-destructive">
                        No Data
                    </p>
                )}
            </div>
        </div>
    );
}
