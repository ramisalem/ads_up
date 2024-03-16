"use server";
import { Coupons } from "@/constants/types";

export const getCoupons = async (): Promise<Coupons[]> => {
    const res = await fetch(
        "https://wy8r3.wiremockapi.cloud/api/v1/coupons",

    );
    const data = await res.json();
    console.log(data)
    return data;
}