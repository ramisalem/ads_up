
import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";


import { LoginSchema } from "@/schemas";
import { login } from "@/data/auth/user";

export default {
  providers: [

    Credentials({
      async authorize(credentials, request): Promise<User | null | any> {

        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await login(email, password);
          if (user) {

            return user;
          }
        }


        return null;
      }
    })
  ],
} satisfies NextAuthConfig