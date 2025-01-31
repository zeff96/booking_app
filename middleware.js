import { decrypt } from "./app/lib/session";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/motorcycles"];
const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/acount_confirmation",
];

export default async function middleware(req) {
  // check if current routes is protected
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // decrypt session from cookies
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // redirect to login if user not authenticated

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // redirect to motorcycles if user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/motorcycles")
  ) {
    return NextResponse.redirect(new URL("/motorcycles", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
