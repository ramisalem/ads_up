"use server";
import { Metadata } from "@/constants/types";
import { MetaDataSchema } from "@/schemas";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import api from "@/data/api/axiosInstance";
export const getMetadata = async (): Promise<Metadata | any> => {
  let error;

  try {
    const res = await api.get(`/metadata`);
    //revalidatePath("/");
    const data = res.data;
    return data;
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    console.log(error);
    return error;
  }
};

export const updateMetadata = async (
  values: z.infer<typeof MetaDataSchema>
): Promise<Metadata | any> => {
  // console.log("in update metadata action");
  let error;

  try {
    const res = await api.put(`/metadata`, values);

    const data = res.data;
    //console.log("data after update", data);
    return data;
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    console.log("error in update metadata :", error);
    return { error: error };
  }
};
