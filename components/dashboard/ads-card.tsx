"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AdvStatus, AdvType, Categories } from "@/constants/types";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { getOneAdvertisment } from "@/redux/slices/adsSlice";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

//import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Loader from "./loader";
import {
    fetchCategories,
    selectAllCats,
    selectCatById,
    selectCategories,
} from "@/redux/slices/categorysSlice";

import { CategoryDetail } from "./category-detail";
import Link from "next/link";
import { charis, inter } from "../fonts";
type AdvertismentCardProps = {
    id: string;
};

export const AdvertismentCard = ({ id }: AdvertismentCardProps) => {
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

    const img = ["sad(1).jpg", "sad (2).jpg", "sad (3).jpg"];
    return (
        <div className="flex items-center   justify-center rounded-lg ">
            {isLoading ? (
                <div>
                    <Loader />
                </div>
            ) : hasError ? (
                <p className="text-destructive">Error:{error}</p>
            ) : detailedAd !== undefined ? (
                <Card className="flex md:flex-row  flex-col ">
                    <Carousel className=" relative flex-col z-20 items-center justify-between space-y-8 bg-transparent rounded-lg   max-w-sm">
                        <div className=" flex-row inline-flex z-40 items-center bg-transparent absolute top-[40px] md:top-[50px] right-[150px] justify-center  space-x-2  ">
                            <CarouselPrevious className="z-40 " />
                            <CarouselNext className="z-40 " />
                        </div>
                        <CarouselContent>
                            {detailedAd?.images.map((item, index) => (
                                <CarouselItem key={index}>
                                    <Card className="border-none rounded-none z-0 shadow-none">
                                        <CardHeader>
                                            <CardDescription>Images</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex z-0 aspect-square items-center  justify-center">
                                            <Image
                                                src={`https://adsup.s3.me-central-1.amazonaws.com/images/${item} `}
                                                alt="ad images"
                                                width={400}
                                                height={300}
                                                className="rounded-md z-0"
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <Card className="flex flex-col  shadow-none  bg-transparent p-4    rounded-none border-none">
                        <CardHeader className="space-y-2">
                            <CardTitle className="md:flex-row flex-col flex items-start justify-between md:items-start gap-4">
                                <div className="flex flex-row md:flex-grow items-center  rounded-md md:space-x-2 justify-start ">
                                    <Label className="text-muted"> Title:</Label>
                                    <span className=" text-3xl font-semibold ">
                                        {detailedAd?.title}{" "}
                                    </span>
                                </div>
                                <div className="flex flex-row md:flex-grow items-center  rounded-none p-2 space-x-2 justify-end ">
                                    <Label className="text-muted"> price:</Label>
                                    <h1
                                        className={`${charis} antialiased text-3xl font-semibold `}
                                    >
                                        {detailedAd?.price.toLocaleString("en-SA", {
                                            style: "currency",
                                            currency: "SAR",
                                        })}
                                    </h1>
                                </div>
                            </CardTitle>
                            <div className=" flex md:flex-row flex-col shadow-sm bg-transparent items-start justify-around md:space-x-0">
                                <div className="flex flex-row md:flex-grow items-center rounded-none p-2 space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Owner:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {/*detailedAd?.owner*/}
                                        {"User "}
                                    </h1>
                                </div>

                                <div className="flex flex-row md:flex-grow items-end rounded-none p-2 space-x-2 justify-start ">
                                    <Label className="text-muted-foreground"> Category:</Label>
                                    <h1 className=" text-xl font-semibold ">
                                        {categId && <CategoryDetail id={categId} />}{" "}
                                    </h1>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-grow ">
                            <div className="flex flex-row  items-center border border-muted rounded-md p-1 md:space-x-4 justify-start ">
                                <span className="text-muted-foreground">Status</span>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder={detailedAd?.status} />
                                    </SelectTrigger>
                                    <SelectContent className="z-20">
                                        {["Pending", "Published", "Deleted", "Hidden"].map(
                                            (item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                                <span className="text-muted text-sm ">
                                    here you can change the Status
                                </span>
                            </div>
                            {/* <Separator className="bg-black/55 w-full h-[1px] rounded-2xl" /> */}
                            description:
                            <div className="text-sm flex-grow font-bold">
                                {" "}
                                {detailedAd?.description}{" "}
                            </div>
                        </CardContent>
                        <div className="text-md  text-blue-600">
                            {" "}
                            {detailedAd?.link && (
                                <Link href={detailedAd?.link}>Link:{detailedAd?.link}</Link>
                            )}
                        </div>
                        <Separator className="bg-gray-200 w-full h-[1px] rounded-xl" />
                        <CardFooter className="flex flex-row gap-2 items-center p-2 justify-between">
                            <span className="text-sm text-muted"> Start Date:</span>
                            {detailedAd?.start && (
                                <span>🕐 {format(detailedAd?.start, "PPP")}</span>
                            )}
                            <span className="text-sm text-muted">End Date:</span>
                            {detailedAd?.end && <span>{format(detailedAd?.end, "PPP")}</span>}
                        </CardFooter>
                        <Separator className="bg-gray-200 w-full h-[1px] rounded-xl" />
                        <CardFooter className="flex flex-row gap-2 items-center p-2 justify-between">
                            <span className="text-sm text-muted"> Created date: </span>
                            {detailedAd?.createdAt && (
                                <span>🕐{format(detailedAd?.createdAt, "PPP")}</span>
                            )}
                            <span className="text-sm text-muted"> Updated date:</span>
                            {detailedAd?.updatedAt && (
                                <span>{format(detailedAd?.updatedAt, "PPP")}</span>
                            )}
                        </CardFooter>
                        <Button variant="default" onClick={() => router.back()}>
                            Back{" "}
                        </Button>
                    </Card>
                </Card>
            ) : (
                <p className="text-destructive">
                    <Loader />{" "}
                </p>
            )}
        </div>
    );
};
