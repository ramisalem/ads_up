"use server";
import { Coupons } from "@/constants/types";

export const getCoupons = async (): Promise<any> => {
    let error;
    try {
        const res = await fetch(
            "https://wy8r3.wiremockapi.cloud/api/v1/coupons", { next: { revalidate: 10 } });
        const data = await res.json();
        //console.log({ res })
        //console.log({ data })
        return data;
    } catch (e) {
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }
}