"use server";

import { currentRole } from "@/lib/auth";
//import { UserRole } from "@/constants/types";
import { UserRole } from "@/schemas";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.Values.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" }
};
