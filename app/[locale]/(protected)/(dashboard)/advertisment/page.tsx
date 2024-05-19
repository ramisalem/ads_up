'use client';
import { useI18n } from '@/locales/client';
//import { getAllAds } from '@/actions/advertisment';
import { fetchAds } from '@/redux/slices/advSlices';
import { Suspense, useEffect } from 'react';

import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import Loader from '@/components/dashboard/loader';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

export default function Advertisment() {
    const t = useI18n();
    const { adsList, error, hasError, isLoading } = useAppSelector((state) => state.ads);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('in fetchads use effect');
        dispatch(fetchAds());
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className=" border-radius my-6  md:w-full  py-4 px-[0.25rem] items-start rounded-md  md:flex-col">
                <p className="text">{t('advertisment')}</p>
                <span>{adsList && <DataTable columns={columns} data={adsList} />}</span>
                <span>{hasError && <p>{error}</p>}</span>
            </div>
        </Suspense>
    );
}
