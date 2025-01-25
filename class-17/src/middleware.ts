import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest){
   const cookieStore = await cookies();

   const IsLogin = cookieStore.get("IsLogin")?.value;

   if(IsLogin === "0" && request.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL('/login', request.url))
   }

   if(IsLogin === "1" && request.nextUrl.pathname === "/login"){
    return NextResponse.redirect(new URL('/', request.url))
   }
}

export const config = {
    matcher: ['/', '/login'],
  }