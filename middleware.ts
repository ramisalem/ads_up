import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const langs = ["en", "ar"];
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  //urlMappingStrategy: 'rewriteDefault'
});
const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const nextUrl = new URL(req.nextUrl); //req;

  // Check if the first path segment is a valid locale

  if (langs.includes(nextUrl.pathname.split("/")[1])) {
    nextUrl.pathname = nextUrl.pathname.replace(/^\/(en|ar)\/?/, "");
  }
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return I18nMiddleware(req);
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return NextResponse.rewrite(
      new URL(`/en/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return I18nMiddleware(req);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  //matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: [
    // '/',
    // '/(ar|en)/:path*',
    // "/((?!api|auth|_next|.*\\..*).*)",
    "/((?!api|_next/static|_next/public|_next/image|favicon.ico).*)",
  ],
};
