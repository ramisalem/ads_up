"use server";

import { AdvSchema } from "@/constants/types";

export const getAllStory = async () => {
    let data;
    let isError = false;
    let error = "";
    try {
        const response = await fetch("http://localhost:3001/api/v1/story/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        data = await AdvSchema.parse(response.json());
        console.log(data)

    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };

}