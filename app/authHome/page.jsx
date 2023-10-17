import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';


import SignOut from '@components/Auth/SignOut';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/authHome/sign-in');
  }


  return (
    <>
  
    <div className="card">
      <h2>Welcome!</h2>
      <code className="highlight">{user.role}</code>
      <Link className="button" href="/authHome/profile">
        Go to Profile
      </Link>
      <SignOut />
    </div>
   
    </>
  );
}