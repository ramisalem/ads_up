import axios from "axios";
import { AdvType } from "@/constants/types";

export const getAllAds = async (): Promise<{
  data?: AdvType[];
  isError: boolean;
  error: string;
}> => {
  let data: AdvType[] | undefined;
  let isError = false;
  let error = "";

  try {
    const response = await axios.get(
      "https://65f372c4105614e654a089c4.mockapi.io/api/v1/ads",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    data = response.data;
  } catch (e: any) {
    isError = true;
    if (e.response) {
      error = `Error ${e.response.status}: ${e.response.data}`;
    } else if (e.request) {
      // The request was made but no response was received
      error = "No response received from server.";
    } else {
      // Something happened in setting up the request that triggered an Error
      error = `Error: ${e.message}`;
    }
  }

  return { data, isError, error };
};
