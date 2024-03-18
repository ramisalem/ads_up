"use server";

import { AdvType } from "@/constants/types";

export const getAllAds = async (): Promise<AdvType[] | string | undefined | any> => {
    console.log('in get ads');
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
        console.log(res)
        data = res
        //console.log(stories)
        //data = stories;
        console.log('this is data that will return')
        console.log(data)

    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };

}