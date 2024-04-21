import { publicRoutes, authRoutes, DEFAULT_REDIRECT_ROUTE } from "./routes";

export const middleware = (request) => {
  const { nextUrl } = request;
  const currentUser = request.cookies.get("token")?.value;

  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  if (isAuthRoutes) {
    if (currentUser) {
      return Response.redirect(new URL(DEFAULT_REDIRECT_ROUTE, nextUrl));
    }
    return null;
  }

  if (!currentUser && !isPublicRoutes) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
