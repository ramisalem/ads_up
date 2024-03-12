import NextAuth from "next-auth"
import { UserRole } from "@prisma/client";
//import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/auth/user";
//import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
//import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    // async signIn({ user, account }) {
    //   // Allow OAuth without email verification
    //   if (account?.provider !== "credentials") return true;

    //   console.log('sign in callback')
    //   console.log(user)
    //   //return {name:'saddam',email:user.email,id:user.id};

    //   const existingUser = await getUserById(user.userId as string);
    //   console.log({ in_sign: existingUser });
    //   // Prevent sign in without email verification
    //   if (!existingUser?.emailVerified) return false;

    //   if (existingUser.isTwoFactorEnabled) {
    //     const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

    //     if (!twoFactorConfirmation) return false;

    //     //   // Delete two factor confirmation for next sign in
    //     await db.twoFactorConfirmation.delete({
    //       where: { id: twoFactorConfirmation.id }
    //     });
    //   }

    //   return true;
    // },
    async session({ token, session, user }) {
      console.log('sessionCallback')
      //console.log({ user_in_session: token })
      if (token.sub && session.user) {
        session.user.id = token.sub;
        //session.user = user;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token, user }) {
      console.log('in token callback');
      return { ...token, ...user };
      // if (!token.sub) return token;

      // const existingUser = await getUserById(user.userId as string);

      // if (!existingUser) return token;

      // // const existingAccount = await getAccountByUserId(
      // //   existingUser.id
      // // );

      // token.isOAuth = !!existingAccount;
      // token.name = existingUser.name;
      // token.email = existingUser.email;
      // token.role = existingUser.role;
      // // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      // console.log(token)
      // return token;
    }
  },
  //adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
