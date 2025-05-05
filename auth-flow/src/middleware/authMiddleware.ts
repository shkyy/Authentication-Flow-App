import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function AuthMiddleware (request: NextRequest) {
    // get the path the user is trying to access
    const path = request.nextUrl.pathname;

    // define authentication routes
    const isProctectedRoute = path === '/dashboard';

    // define authentication routes
    const isAuthRoute = path === '/';

    // check if the user is authenticatied by looking for the auth storage
    const isAuthenticated = request.cookies.has('auth-storage');

    // redirect unauthenticated users to login page
    if (isProctectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // redirect unauthenticated users to dashboard page
    if (isProctectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}


// configure which paths should be processed bt the middleware
export const config = {
    matcher: ['/', '/dashboard']
}