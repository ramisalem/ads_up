'use client';
import { Card, CardContent } from '@/components/ui/card';
import { AdvType } from '@/constants/types';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import { getOneAdvertisment } from '@/redux/slices/advSlices';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { format } from 'date-fns';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { FaMoneyBill } from 'react-icons/fa';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';

export default function AdvertismentCard({ params: { id } }: { params: { id: string } }) {
    const router = useRouter();
    const adId = id;
    const dispatch = useAppDispatch();

    const { detailedAd, isLoading, error, hasError } = useAppSelector((state) => state.ads);
    useEffect(() => {
        console.log('in use effect get one ad');

        dispatch(getOneAdvertisment(adId));
        console.log('in use effect', detailedAd);
    }, [id]);

    return (
        <div className="flex items-center   justify-center rounded-lg  p-8">
            {isLoading && <div>loading.....</div>}
            {hasError && <p className="text-destructive">Error:{error}</p>}
            {detailedAd !== null ? (
                <div className="flex flex-col  md:w-[600px] " key={detailedAd?.uuid}>
                    <div className="outline outline-offset-2 rounded-md  outline-slate-400">
                        <Carousel className="w-full max-w-xs">
                            <CarouselContent>
                                {detailedAd.images.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <Image
                                                        src={`https://adsup.s3.me-central-1.amazonaws.com/images/${item} `}
                                                        alt="ad images"
                                                        width={300}
                                                        height={300}
                                                        className="rounded-md"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        {/*  */}
                    </div>
                    <div className="flex flex-col   shadow-xl  bg-white p-4  mt-[10px]  rounded-lg">
                        <div className="flex-row flex justify-between items-center gap-8">
                            <h1 className=" text-2xl font-semibold ">
                                title:
                                {detailedAd?.title}{' '}
                            </h1>
                            <h1 className="text-xl font-semibold text-right text-red-400  ">
                                Owner: 👤
                                {detailedAd?.owner}{' '}
                            </h1>
                            <h1 className="text-xl font-semibold text-right text-red-400  ">
                                Price:
                                <FaMoneyBill className="w-4 h-6" />
                                {detailedAd?.price}{' '}
                            </h1>
                        </div>
                        <Separator className="bg-gray-200 w-full h-1 rounded-2xl" />
                        <div className="flex flex-row gap-6 items-center p-10 justify-between">
                            <div className="text-lg font-bold text-slate-500">
                                Category
                                {detailedAd?.categoryId}{' '}
                            </div>
                            <div className="text-lg font-bold text-slate-500">
                                {' '}
                                {detailedAd?.description}{' '}
                            </div>
                            {/* <div className="text-sm font-bold text-blue-500 underline rounded-md p-4 hover:outline hover:outline-offset-2 hover:outline-violet-200">
                                ⛳ <a href={detailedAd.link}> {detailedAd.link}</a>
                            </div> */}
                        </div>
                        <Separator className="bg-gray-200 w-full h-1 rounded-xl" />
                        <div className="flex flex-row gap-6 items-center p-10 justify-between">
                            {detailedAd?.start && (
                                <div>start date🕐{format(detailedAd?.start, 'PPP')}</div>
                            )}
                            {detailedAd?.end && (
                                <div>end date{format(detailedAd?.end, 'PPP')}</div>
                            )}
                        </div>
                        <Separator className="bg-gray-200 w-full h-1 rounded-xl" />
                        <div className="flex flex-row gap-6 items-center p-10 justify-between">
                            {detailedAd?.createdAt && (
                                <div>created date🕐{format(detailedAd?.createdAt, 'PPP')}</div>
                            )}
                            {detailedAd?.updatedAt && (
                                <div>updated date{format(detailedAd?.updatedAt, 'PPP')}</div>
                            )}
                        </div>
                        <Button variant="default" onClick={() => router.back()}>
                            Back{' '}
                        </Button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
