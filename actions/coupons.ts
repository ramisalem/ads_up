"use server";
import { Coupons } from "@/constants/types";
import * as z from "zod";
import { CupounsSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
export const getCoupons = async (): Promise<[Coupons] | any> => {
    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
    console.log('in get coupons')
    //console.log(url);
    try {
        const res = await fetch(
            `${url}coupons`, {
            method: "GET",
            next: { revalidate: 1 }

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
    console.log('in add coupons server action');

    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
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
            `${url}coupons`, {
            method: "POST",
            next: { revalidate: 1 },
            body: JSON.stringify(validatedFields)
        });
        const data = await res.json();
        revalidatePath('/')
        //console.log('data from post', { data })
        return { success: 'Coupon added successfully', data };
    } catch (e) {
        console.log(e);
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }


}