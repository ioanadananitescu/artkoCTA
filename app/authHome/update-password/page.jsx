import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import UpdatePassword from '../../../components/Auth/UpdatePassword';
import { cache } from 'react';


export default async function UpdatePasswordPage() {
 //code replacind const supabase=createServerComponentClient({cookies}) that causes production problems
 const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
 })
 const supabase=createServerSupabaseClient()

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/authHome/sign-in');
  }

  return <UpdatePassword />;
}