import axios from "axios";
import { Tickets } from "@/constants/types";

export const getTickets = async (): Promise<Tickets[]> => {
  try {
    const response = await axios.get(
      "https://65f372c4105614e654a089c4.mockapi.io/api/v1/tickets"
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with your Axios request:", error);
    throw error;
  }
};
