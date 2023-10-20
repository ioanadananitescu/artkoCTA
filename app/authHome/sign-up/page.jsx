import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import SignUp from '@components/Auth/SignUp';
import { cache } from 'react';


export default async function SignUpPage() {
  
 //code replacind const supabase=createServerComponentClient({cookies}) that causes production problems
 const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
})
const supabase=createServerSupabaseClient()

  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/authHome/sign-in');
  }

  return <SignUp />;
}