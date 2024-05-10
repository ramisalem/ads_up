//import axios from "axios";
import { Tickets } from "@/constants/types";
import axios from "axios";
import { revalidatePath } from "next/cache";
//import { revalidatePath } from 'next/cache'

export const getTickets = async (): Promise<Tickets[] | any> => {
  let error;
  let url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_BASE_URL
      : process.env.NEXT_PUBLIC_DEV_BASE_URL;

  try {
    const res = await axios.get(`${url}/tickets`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // await fetch(`${url}/tickets`, {
    //   method: "GET",

    //   headers: {
    //     mode: "no-cors",
    //   },
    // });
    //console.log({ res });
    const data: Tickets[] = res.data;

    return data;
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    console.log(error);
    return error;
  }
};

export const closeTickets = async (ticketId: string): Promise<any> => {
  let error;
  let url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_BASE_URL
      : process.env.NEXT_PUBLIC_DEV_BASE_URL;

  try {
    const res = await axios.put(`${url}/tickets`, {
      headers: {
        param: ticketId,
      },
    });

    const data = await res.data;

    //revalidatePath('/');
    return { success: "closed ticket successed", data };
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    return error;
  }
};
