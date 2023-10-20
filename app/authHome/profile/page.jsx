import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from '@components/Auth/SignOut';
import { headers } from 'next/headers';
import { cache } from 'react';



   


export default async function Profile() {


  const headersList = headers();
  const domain = headersList.get('host') || "";
  const fullUrl = headersList.get('referer') || "";

  //code replacind const supabase=createServerComponentClient({cookies}) that causes production problems
  const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
})

 const supabase=createServerSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/authHome/sign-in');
  }



  return (
    <div className="card">
      <h2>User Profile</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
    
   
   <div></div>
      <Link className="button" href="/authHome">
        Go Home
      </Link>
      <SignOut />
   
    </div>
  );
}