export const middleware = (request) => {
  const token = request.cookies.get("token")?.value;

  if (token && !request.nextUrl.pathname.startsWith("/motorcircles")) {
    return Response.redirect(new URL("/motorcircles", request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
