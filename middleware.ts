import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from "next/server";


const langs = ['en', 'ar']
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
  //urlMappingStrategy: 'rewriteDefault'
})
const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const nextUrl = new URL(req.nextUrl);//req;

  // Check if the first path segment is a valid locale
  console.log(`in middleware ${nextUrl}`);
  if ((langs.includes(nextUrl.pathname.split('/')[1]))) {
    // Remove the /en segment
    console.log('we wll remove local segment')
    nextUrl.pathname = nextUrl.pathname.replace(/^\/(en|ar)\/?/, '');
    console.log(`url after remove en ${nextUrl}`);
    //return NextResponse.rewrite(nextUrl);
  }
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    console.log('it is api auth')
    return null;
  }

  if (isAuthRoute) {
    console.log(`is it auth rout ${nextUrl}`)
    if (isLoggedIn) {
      console.log(`he is not logged in `)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    console.log(`he must be log in`)
    return I18nMiddleware(req);
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log(`he is not logged in and it is not public`)
    let callbackUrl = nextUrl.pathname;
    console.log(`callback befor add search ${callbackUrl}`)
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    console.log(`callback after add search ${callbackUrl}`)
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    console.log(`encoded callback  ${encodedCallbackUrl}`)
    return NextResponse.rewrite(new URL(
      `/en/auth/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl
    ));
  }

  //return null;
  return I18nMiddleware(req);
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  //matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: [
    '/',
    '/(ar|en)/:path*',
    "/((?!api|auth|_next|.*\\..*).*)"
  ]
}