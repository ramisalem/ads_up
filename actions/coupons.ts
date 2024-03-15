"use server";
import { Coupons } from "@/constants/types";

export const getCoupons = async (): Promise<Coupons[]> => {
    const res = await fetch(
        "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
    );
    const data = await res.json();
    return data;
}