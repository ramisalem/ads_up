'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { AdvStatus, AdvType, Categories } from '@/constants/types';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import { getOneAdvertisment } from '@/redux/slices/adsSlice';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { format } from 'date-fns';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { FaMoneyBill } from 'react-icons/fa';
//import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import Loader from './loader';
import {
    fetchCategories,
    selectAllCats,
    selectCatById,
    selectCategories
} from '@/redux/slices/categorysSlice';
import { EntityId } from '@reduxjs/toolkit';
import { CategoryDetail } from './category-detail';
import Link from 'next/link';

export default function AdvertismentCard({ params: { id } }: { params: { id: string } }) {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const { detailedAd, isLoading, error, hasError } = useAppSelector((state) => state.ads);

    const [categId, setCategoryId] = useState<string>();

    useEffect(() => {
        if (isLoading === false && detailedAd == null) {
            dispatch(getOneAdvertisment(id)).then((res) => {
                if (res.payload) {
                    setCategoryId(res.payload[0].categoryId);
                }
            });
            dispatch(fetchCategories());
        }
    }, [id]);

    const img = ['sad(1).jpg', 'sad (2).jpg', 'sad (3).jpg'];
    return (
        <div className="flex items-center   justify-center rounded-lg ">
            {isLoading && (
                <div>
                    {' '}
                    <Loader />{' '}
                </div>
            )}
            {hasError && <p className="text-destructive">Error:{error}</p>}
            {isLoading === false && hasError === false && detailedAd !== null ? (
                <Card className="flex md:flex-row flex-col  " key={detailedAd?.uuid}>
                    <Card className="flex flex-col   shadow-none  bg-transparent p-4    rounded-none border-none">
                        <CardHeader>
                            <CardTitle className="md:flex-row flex-col flex items-start justify-between md:items-center gap-4">
                                <div className="flex flex-row md:flex-grow items-center border border-muted rounded-md md:p-2 md:space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Title:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {detailedAd?.title}{' '}
                                    </h1>
                                </div>
                                <div className="flex flex-row  items-center border border-muted rounded-md p-1 md:space-x-2 justify-start ">
                                    <span className="text-muted-foreground"> Status : </span>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder={detailedAd?.status} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {['Pending', 'Published', 'Deleted', 'Hidden'].map(
                                                (item) => (
                                                    <SelectItem key={item} value={item}>
                                                        {item}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardTitle>
                            <div className=" flex md:flex-row flex-col shadow-sm bg-transparent items-start justify-around md:space-x-0">
                                <div className="flex flex-row md:flex-grow items-center border border-muted rounded-none p-2 space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Owner:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {/*detailedAd?.owner*/}
                                        {'User '}
                                    </h1>
                                </div>
                                <div className="flex flex-row md:flex-grow items-center border border-l-none rounded-none p-2 space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Price:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {detailedAd?.price}{' '}
                                    </h1>
                                </div>
                                <div className="flex flex-row md:flex-grow items-center border border-l-none border-muted rounded-none p-2 space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Category:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {categId && <CategoryDetail id={categId} />}{' '}
                                    </h1>
                                </div>
                            </div>
                            <Separator className="bg-gray-200 w-full h-[1px] rounded-2xl" />
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow ">
                            description:
                            <div className="text-lg font-bold text-slate-500">
                                {' '}
                                {detailedAd?.description}{' '}
                            </div>
                        </CardContent>
                        <div className="text-lg font-bold text-slate-500">
                            {' '}
                            {detailedAd?.link && (
                                <Link href={detailedAd?.link}>Link:{detailedAd?.link}</Link>
                            )}
                        </div>
                        <Separator className="bg-gray-200 w-full h-[1px] rounded-xl" />
                        <CardFooter className="flex flex-row gap-6 items-center p-6 justify-between">
                            Start Date:
                            {detailedAd?.start && (
                                <span>🕐 {format(detailedAd?.start, 'PPP')}</span>
                            )}
                            End Date:
                            {detailedAd?.end && <span>{format(detailedAd?.end, 'PPP')}</span>}
                        </CardFooter>
                        <Separator className="bg-gray-200 w-full h-[1px] rounded-xl" />
                        <CardFooter className="flex flex-row gap-6 items-center p-6 justify-between">
                            {detailedAd?.createdAt && (
                                <span>
                                    Created date🕐: {format(detailedAd?.createdAt, 'PPP')}
                                </span>
                            )}
                            {detailedAd?.updatedAt && (
                                <span>
                                    Updated date: {format(detailedAd?.updatedAt, 'PPP')}
                                </span>
                            )}
                        </CardFooter>
                        <Button variant="default" onClick={() => router.back()}>
                            Back{' '}
                        </Button>
                    </Card>

                    <Carousel className=" relative flex-col z-20 items-center justify-between space-y-8 bg-transparent rounded-lg   max-w-xs">
                        <div className=" flex-row inline-flex z-50items-center bg-transparent absolute top-[40px] md:top-[550px] right-[150px] justify-center  space-x-2  ">
                            <CarouselPrevious className="z-50 " />
                            <CarouselNext className="z-50 " />
                        </div>
                        <CarouselContent>
                            {
                                /*detailedAd?.images*/ img.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="border-none rounded-none z-0 shadow-none">
                                            <CardHeader>
                                                <CardDescription>Images</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex z-0 aspect-square items-center bg-white justify-center">
                                                <Image
                                                    src={
                                                        `/img/${item}` /*`https://adsup.s3.me-central-1.amazonaws.com/images/${item} `*/
                                                    }
                                                    alt="ad images"
                                                    width={400}
                                                    height={300}
                                                    className="rounded-md z-0"
                                                />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                </Card>
            ) : (
                <></>
            )}
        </div>
    );
}
