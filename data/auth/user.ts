import { db } from "@/lib/db";
import { jwtDecode } from 'jwt-decode';
//import {cookie} from 'next-cookie';
interface UserResponse {
  name: string,
  email: string,
  id: string | number,
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
export const getUserByEmail = async (email: string, password: string, token: string) => {
  try {
    //const user = await db.user.findUnique({ where: { email } });
    const response = await fetch(`http://localhost:3001/api/v1/users/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${token}`
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await response.json();
    const { user } = res;
    //const user = res.data.filter((user) => user.email === email)
    console.log(res)
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    //const user = await db.user.findUnique({ where: { id } });
    console.log(`in get user by id ${id}`)
    const user = await fetch(`http://localhost:3001/api/v1/users/?id=${id}`, {
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
