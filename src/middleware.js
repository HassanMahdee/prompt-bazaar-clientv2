import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/all-prompts", "/login", "/register"];
  
  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/prompts"];
  
  // Role-based protected routes
  const creatorRoutes = ["/dashboard/creator"];
  const adminRoutes = ["/dashboard/admin"];

  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated for protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Check role-based access for creator routes
  if (creatorRoutes.some(route => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (session.user.role !== "Creator" && session.user.role !== "Admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Check role-based access for admin routes
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (session.user.role !== "Admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
