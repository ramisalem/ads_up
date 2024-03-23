"use server";
import { Coupons } from "@/constants/types";
import * as z from "zod";
import { CupounsSchema } from "@/schemas";
export const getCoupons = async (): Promise<any> => {
    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
    console.log('in get coupons')
    console.log(url);
    try {
        const res = await fetch(
            `${url}coupons`, {
            method: "GET",
            next: { revalidate: 100 }

        });

        const data = await res.json();

        return data.coupons;
    } catch (e) {
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }
}

export const addCoupon = async (values: z.infer<typeof CupounsSchema>,): Promise<any> => {
    console.log('in add coupons');
    let error;
    const validatedFields = CupounsSchema.safeParse(values);
    console.log(validatedFields)
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    try {
        // const res = await fetch(
        //     "https://wy8r3.wiremockapi.cloud/api/v1/coupons", {
        //     method: "POST",

        //     body: JSON.stringify(validatedFields)
        // });
        const res = await fetch(
            "http://localhost:3000/api/coupons", {
            method: "POST",

            body: JSON.stringify(validatedFields)
        });
        const data = await res.json();

        //console.log('data from post', { data })
        return { success: 'Coupon added successfully' };
    } catch (e) {
        console.log(e);
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }

    //   console.log(validatedFields);
}