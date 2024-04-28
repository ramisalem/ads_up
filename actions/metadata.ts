"use server";
import { Metadata } from "@/constants/types";
import { MetaDataSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getMetadata = async (): Promise<Metadata | any> => {
  // console.log("in get metadata action");
  let error;
  let url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_BASE_URL
      : process.env.NEXT_PUBLIC_DEV_BASE_URL;

  try {
    const res = await fetch(`${url}/metadata`, {
      cache: "no-store",
      method: "GET",

      headers: {
        mode: "no-cors",
      },
    });
    revalidatePath("/");
    const data = await res.json();

    return data;
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    return error;
  }
};

export const updateMetadata = async (
  values: z.infer<typeof MetaDataSchema>
): Promise<Metadata | any> => {
  console.log("in update metadata action");
  let error;
  let url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_BASE_URL
      : process.env.NEXT_PUBLIC_DEV_BASE_URL;

  try {
    const res = await fetch(`${url}/metadata`, {
      cache: "no-store",
      method: "PUT",
      body: JSON.stringify({ values }),
      headers: {
        mode: "no-cors",
      },
    });
    revalidatePath("/");
    const data = await res.json();

    return { data };
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    return error;
  }
};
