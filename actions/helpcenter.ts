//import axios from "axios";
import { Tickets } from "@/constants/types";
//import { revalidatePath } from 'next/cache'
export const getTickets = async (): Promise<Tickets[] | any> => {
    // const res = await fetch(
    //     "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
    // );
    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;
    //console.log('url in get tickets', process.env.NEXT_DEV_BASE_URL);
    try {
        const res = await fetch(
            `${url}/tickets`, {
            method: "GET",
            next: { revalidate: 1 }

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
    // const res = await fetch(
    //     "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
    // );

    let error;
    let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL;

    try {
        const res = await fetch(
            `${url}/tickets`, {
            method: "PUT",
            next: { revalidate: 1 },
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

