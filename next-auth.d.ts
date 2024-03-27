import { UserRole } from "@/constants/types";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole; //"Admin" | "User";
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  userId: number;
  token: string;
  email: string;
  password: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
