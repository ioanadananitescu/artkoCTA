import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';
import AccountForm from './account-form';

import { headers } from 'next/headers';
import { cache } from 'react';

import PostForm from './posts-form'
   


export default async function AuthHome() {


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

  const{
    data:{session}}=await supabase.auth.getSession();
  

  if (!user) {
    redirect('/authHome/sign-in');
  }



  return (
 
   
      <AccountForm session={session} />
   
  );
}