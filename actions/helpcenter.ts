"use server";
//import axios from "axios";
import { Tickets } from "@/constants/types";
import axios from "axios";
import api from "@/data/api/axiosInstance";

export const getTickets = async (): Promise<Tickets[] | any> => {
  let error;

  try {
    const res = await api.get(`/tickets`);

    const data: Tickets[] = res.data;

    return data;
  } catch (e) {
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    throw e;
    //return error;
  }
};

export const closeTickets = async (ticketId: string): Promise<any> => {
  let error;

  try {
    const res = await api.put(`/tickets`, {
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
