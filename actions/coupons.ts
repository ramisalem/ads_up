import axios from "axios";
import { Coupons } from "@/constants/types";
import * as z from "zod";
import { CupounsSchema } from "@/schemas";

export const getCoupons = async (): Promise<Coupons[]> => {
  let error: any;
  let url =
    process.env.NODE_ENV === "production"
      ? process.env.PROD_BASE_URL
      : process.env.DEV_BASE_URL;
  console.log("in get coupons");
  console.log(url);
  try {
    const res = await axios.get(`${url}coupons`, {
      params: { revalidate: 100 },
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
  console.log("in add coupons");
  let error;
  const validatedFields = CupounsSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  try {
    const res = await axios.post(
      "http://localhost:3000/api/coupons",
      validatedFields
    );
    // const res = await axios.post("https://wy8r3.wiremockapi.cloud/api/v1/coupons", validatedFields);
    // const data = await res.data;
    //console.log('data from post', { data })
    return { success: "Coupon added successfully" };
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
