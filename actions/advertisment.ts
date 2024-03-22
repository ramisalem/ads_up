"use server";

import { AdvType } from "@/constants/types";

export const getAllAds = async (): Promise<AdvType[] | string | undefined | any> => {

    let data: [AdvType] | undefined;
    let isError = false;
    let error = "";
    try {
        const response = await fetch("https://65f372c4105614e654a089c4.mockapi.io/api/v1/ads", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json()

        data = res


    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };

}