'use client'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function RegisterForm({session}){
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [RMsg, setRMsg] = useState('');
  const [user, setUser]=useState('');


const supabase=createClientComponentClient()


const Register = async () => {
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
    options:{
      emailRedirectTo:`${location.origin}/users/settings`
    }
  }
 )
 router.refresh();
  if(error){
    setRMsg(error.message)
    console.log(error)
  }else{
    setRMsg('User created successfully')
    setUser(data.user)
  }
  }

  return (
    <section >
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
{session?(
<>
<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
Sign out from your account
</h1>
    <form action="/auth/signout" method="post">
      <button className="button block" type="submit">
        Sign out
      </button>
    </form>
    </>
):(
  <>
   <div>
    <h1>Register User</h1>
    email:<input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /><br/>
    Password:<input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" /><br/>
   
    
    <button onClick={Register}>Register</button><br/>
    <p>{RMsg}</p>
    </div>
  </>
  )
}
</div></div></div></section>
)
}
