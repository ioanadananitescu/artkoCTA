import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

 /*   const {
    data: { user },
  } = await supabase.auth.getUser()
 //if user is signed in
  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/users', req.url))
  } 

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url))
  } */

  //cheching the session path
  await supabase.auth.getSession();

  return res;
}

  export const config = {
    matcher: ['/authHome', '/authHome/profile'],
  };
