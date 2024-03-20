"use server";

import { jwtDecode } from 'jwt-decode';
import { User } from "next-auth";
//import {cookie} from 'next-cookie';
interface UserResponse {
  name: string,
  email: string,
  id: string | number | any,
  password: string,
  emailVerified: boolean,
  isTwoFactorEnabled: boolean,
}
export const login = async (email: string, password: string) => {
  try {
    //const user = await db.user.findUnique({ where: { email } });
    const authResponse = await fetch("https://dev.deemat.net/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await authResponse.json();

    const { token } = res;
    const decodedToken = jwtDecode<{ sub: string; exp: number, userId: number, token: string }>(
      token
    )
    console.log('decoded token');
    console.log(decodedToken);
    // if (token) {
    //   const user = await getUserByEmail(email, password, token)
    //   console.log(user);
    //   return user;

    // }
    //console.log(res)
    //console.log(user);
    //console.log({ res });
    return decodedToken;
  } catch {
    return null;
  }
};
export const getUserByEmail = async (token: string, email?: string, password?: string) => {
  try {
    //const user = await db.user.findUnique({ where: { email } });
    // console.log('in get user by email')
    // console.log(`token ${token}`);
    // console.log(`email ${email}`)
    const response = await fetch(`https://dev.deemat.net/api/v1/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${token}`
      },
      // body: JSON.stringify({ email }),
    });
    const res = await response.json();
    //console.log({ res })
    const { user } = res;
    //const user = res.data.filter((user) => user.email === email)
    // console.log(res)
    return user;
  } catch (e) {
    console.log(e)
    return null;
  }
};

export const getUserById = async (id: string | number | any): Promise<UserResponse | null> => {
  try {
    //const user = await db.user.findUnique({ where: { id } });
    console.log(`in get user by id ${id}`)
    const user = <UserResponse><unknown>await fetch(`https://dev.deemat.net/api/v1/users/profile/?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        //"authorization": `bearer ${token}`
      },
      body: JSON.stringify({ id: id }),
    });
    console.log(`after get user`)
    return user;
  } catch {
    return null;
  }
};
