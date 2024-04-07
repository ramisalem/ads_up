import axios from "axios";
import { Coupons } from "@/constants/types";
import * as z from "zod";
import { CupounsSchema } from "@/schemas";


export const getCoupons = async (): Promise<Coupons[]> => {
    let error: any;

    let url =
        process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;


    try {
        const res = await axios.get(`${url}/coupons`, {
            headers: {
                "Content-Type": "application/json",
                'mode': 'no-cors',
            },
        });
        return res.data.coupons;
    } catch (e: any) {
        if (e.response) {
            error = `Error ${e.response.status}: ${e.response.data}`;
        } else if (e.request) {
            error = "No response received from server.";
        } else {
            error = `Error: ${e.message}`;
        }
        return error;
    }
};

export const addCoupon = async (
    values: z.infer<typeof CupounsSchema>
): Promise<any> => {

    let error;
    let url =
        process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;
    const validatedFields = CupounsSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    try {
        const res = await axios.post(
            `${url}/coupons`,
            validatedFields
        );
        // const res = await axios.post("https://wy8r3.wiremockapi.cloud/api/v1/coupons", validatedFields);
        const data = await res.data;
        //console.log('data from post', { data })

        return { success: "Coupon added successfully", data }
    } catch (e: any) {
        console.log(e);
        if (e.response) {
            error = `Error ${e.response.status}: ${e.response.data}`;
        } else if (e.request) {
            error = "No response received from server.";
        } else {
            error = `Error: ${e.message}`;
        }
        return error;
    }
};
export const changeCouponStatus = async (coupon: Coupons): Promise<any> => {

    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;

    try {
        const res = await axios.put(
            `${url}/coupons`, coupon.uuid, {
            headers: {
                param: coupon.uuid
            }
        }

        );
        //  await fetch(
        //     `${url}/coupons`, {
        //     method: "PUT",

        //     headers: {
        //         param: coupon.uuid,
        //     },
        // });

        const data = await res.data;

        console.log('data after chang status', data)
        return { success: "change coupon status successed", data };
    } catch (e) {
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }
}
