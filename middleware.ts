import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware triggered");
  const cookieStore = cookies();
  const token = (await cookieStore).get("next-auth.session-token");
  if (token) {
    console.log("Token present: ", token);
  } else {
    console.log("no token found, user stays logged out");
  }
  const isLoggedIn = !!token;
  const url = request.url;
  console.log("User logged in: ", isLoggedIn);

  if (isLoggedIn && (url.includes("/login") || url.includes("/signup"))) {
    return NextResponse.redirect(new URL("/app", request.url));
  }
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/login", "/signup"],
};
