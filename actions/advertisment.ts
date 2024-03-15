"use server";

import { AdvType } from "@/constants/types";

export const getAllStory = async () => {
    console.log('in get stories');
    let data: [AdvType] | undefined;
    let isError = false;
    let error = "";
    try {
        const response = await fetch("http://localhost:3001/api/v1/story/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json()
        console.log(res)
        const { stories } = res.data;
        //console.log(stories)
        data = stories;
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