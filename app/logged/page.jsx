
import AuthButtonServer from '../auth-button-server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {

  const supabase = createServerComponentClient({ cookies })

  const { data: { session } } = await supabase.auth.getSession()
  
  const { data } = await supabase
  .from("posts")
  .select("*, profiles(*)");
  

  if (!session) {
    redirect('/login')
  }


  return (
    <>
      <AuthButtonServer/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
  )
}