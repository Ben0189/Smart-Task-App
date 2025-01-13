export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(req : NextRequest) {
  // auth middleware
  const response = await withAuth(req);
  if (response) {
    return response;
  }

  return NextResponse.next();
}

// config path no need to check auth
const excludeAuthPath = ["/", "/signin", "/signup"]; 

// customize auth redirect strategy
async function withAuth(req) {
  const { pathname } = req.nextUrl;

  if (excludeAuthPath.includes(pathname)) {
    return NextResponse.next(); 
  }

  const token = await getToken({ req });
  if (!token) {
    return NextResponse.redirect(new URL('signin', req.url));
  }

  return NextResponse.next(); 
}

// match all pages
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
],};