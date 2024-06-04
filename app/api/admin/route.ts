import { currentRole } from "@/lib/auth";

import { NextResponse } from "next/server";
import { UserRole } from "@/constants/types";
import { UserRole as schemUserRole } from "@/schemas";

export async function GET() {
    const role = await currentRole();

    if (role === "ADMIN") {
        return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 403 });
}
