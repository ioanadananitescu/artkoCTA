import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';


import ResetPassword from '@components/Auth/ResetPassword';

export default async function ResetPasswordPage() {
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

  return <ResetPassword />;
}