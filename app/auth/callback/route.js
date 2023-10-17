import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  //employing Proof Key for Code Exchange (PKCE) in our authentication flow, 
  //it is necessary to create a route handler responsible for exchanging the code for a session.
  
  //1.Retrieve the code sent back from the Supabase Auth server using the code query parameter.
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

//2.Exchange this code for a session, which we store in our chosen storage mechanism (in this case, cookies).
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  // 3.Finally, we redirect the user to the account page.URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/authHome',request.url))
}