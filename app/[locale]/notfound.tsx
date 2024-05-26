"use client";

import Error from "next/error";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <section>
      <p>You Need to Login to access this page</p>
      <Error statusCode={404} />
    </section>
  );
}
