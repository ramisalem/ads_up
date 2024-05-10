import NextAuth from "next-auth";
import { UserRole } from "@/constants/types";

import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  //update,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  // events: {
  //   async linkAccount({ user }) {
  //     await db.user.update({
  //       where: { id: user.id },
  //       data: { emailVerified: new Date() }
  //     })
  //   }
  // },
  callbacks: {
    async session({ token, session, user }) {
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
      return { ...token, ...user };
    },
  },

  session: { strategy: "jwt" },
  ...authConfig,
});
