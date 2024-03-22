"use server";
import { Tickets } from "@/constants/types";

export const getTickets = async (): Promise<Tickets[]> => {
    const res = await fetch(
        "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
    );
    const data = await res.json();
    return data;
}