export const middleware = (request) => {
  const currentUser = request.cookies.get("token")?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/motorcircles")) {
    return Response.redirect(new URL("/motorcircles", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
