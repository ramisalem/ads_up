"use client";
import { Card } from "@/components/ui/card";
import { AdvType } from "@/constants/types";
import { useAppStore, useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { getOneAdvertisment } from "@/redux/slices/advSlices";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { format } from "date-fns";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function AdvertismentCard({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { advsList, isLoading, error } = useAppSelector((state) => state.ads);
  //const initialized = useRef(false);
  useEffect(() => {
    console.log("in use effect");

    dispatch(getOneAdvertisment());
  }, []);
  //useAppSelector((state) => state.campaigns)?.campaigns?.data || [];

  return (
    <div className="flex items-center   justify-center rounded-lg  p-8">
      {isLoading && <div>loading.....</div>}

      {advsList &&
        advsList.length > 0 &&
        advsList.map((adv: AdvType) =>
          adv?.uuid == id ? (
            <div className="flex flex-col  md:w-[600px] " key={adv?.uuid}>
              <div className="outline outline-offset-2 rounded-md  outline-slate-400">
                <Image
                  src={adv?.images}
                  alt="ad images"
                  width={300}
                  height={100}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col   shadow-xl  bg-white p-4  mt-[10px]  rounded-lg">
                <div className="flex-row flex justify-between items-center gap-8">
                  <h1 className=" text-2xl font-semibold "> {adv?.title} </h1>
                  <h1 className="text-xl font-semibold text-right text-red-400  ">
                    {" "}
                    👤
                    {adv?.price}{" "}
                  </h1>
                </div>
                <Separator className="bg-gray-200 w-full h-1 rounded-2xl" />
                <div className="flex flex-row gap-6 items-center p-10 justify-between">
                  <div className="text-lg font-bold text-slate-500">
                    {" "}
                    {adv?.description}{" "}
                  </div>
                  <div className="text-sm font-bold text-blue-500 underline rounded-md p-4 hover:outline hover:outline-offset-2 hover:outline-violet-200">
                    ⛳ <a href={adv.link}> {adv.link}</a>
                  </div>
                </div>
                <Separator className="bg-gray-200 w-full h-1 rounded-xl" />
                <div className="flex flex-row gap-6 items-center p-10 justify-between">
                  <div>🕐{format(adv.start, "PPP")}</div>
                  <div>{format(adv.end, "PPP")}</div>
                </div>
                <Button variant="default" onClick={() => router.back()}>
                  Back{" "}
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
    </div>
  );
}
