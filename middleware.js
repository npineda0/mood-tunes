// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/api/auth") || token) {
//     return NextResponse.next();
//   }

//   //login
//   if (!token && pathname !== "/") {
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }
// }

// export const config = {
//   matcher: "/",
// };