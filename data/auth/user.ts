import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { UserRole } from "@/constants/types";

interface UserResponse {
  name: string;
  email: string;
  id: string | number | any;
  password: string;
  role: UserRole;
  emailVerified: boolean;
  isTwoFactorEnabled: boolean;
}

export const login = async (email: string, password: string) => {
  try {
    const authResponse = await axios.post(
      "https://app.deemat.net/api/v1/users/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = authResponse.data;
    const decodedToken = jwtDecode<{
      sub: string;
      exp: number;
      userId: number;
      token: string;
    }>(token);
    console.log("decoded token");
    console.log(decodedToken);

    return decodedToken;
  } catch (error) {
    console.error("There was a problem with your Axios request:", error);
    return null;
  }
};

export const getUserByEmail = async (
  token: string,
  email?: string,
  password?: string
) => {
  try {
    const response = await axios.get(
      "https://dev.deemat.net/api/v1/users/profile",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      }
    );
    const { user } = response.data;
    return user;
  } catch (error) {
    console.error("There was a problem with your Axios request:", error);
    return null;
  }
};

export const getUserById = async (
  id: string | number | any
): Promise<UserResponse | null> => {
  try {
    console.log(`in get user by id ${id}`);
    const response = await axios.get(
      `https://dev.deemat.net/api/v1/users/profile/?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(`after get user`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with your Axios request:", error);
    return null;
  }
};
