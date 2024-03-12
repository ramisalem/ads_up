import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole; //"Admin" | "User";
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  userId: number;
  token: string;
  email: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
