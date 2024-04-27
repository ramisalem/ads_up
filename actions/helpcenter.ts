//import axios from "axios";
import { Tickets } from "@/constants/types";
import { revalidatePath } from "next/cache";
//import { revalidatePath } from 'next/cache'

export const getTickets = async (): Promise<Tickets[] | any> => {

    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;

    try {
        const res = await fetch(
            `${url}/tickets`, {
            method: "GET",

            headers: {
                'mode': 'no-cors',
            }

        });

        const data = await res.json();

        return data.tickets;
    } catch (e) {
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }
}

export const closeTickets = async (ticketId: string): Promise<any> => {

    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;

    try {
        const res = await fetch(
            `${url}/tickets`, {
            method: "PUT",

            headers: {
                param: ticketId
            },
        });

        const data = await res.json();

        //revalidatePath('/');
        return { success: "closed ticket successed", data };
    } catch (e) {
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        return error;
    }
}

