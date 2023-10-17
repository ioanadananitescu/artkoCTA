'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'


export default function Login({session}) {

    const supabase = createClientComponentClient()
    const router=useRouter()

  const [email, setEmail] = useState(''); // email of the user
  const [password, setPassword] = useState(''); // password of the user
  const [username, setUsername] = useState(''); // username of the user
  const [Rmsg, setRMsg] = useState(''); // Registration message
  const [Lmsg, setLMsg] = useState(''); // Login message
  const [user, setUser] = useState(''); // User object after registration / login
  const [userSession, setUserSession] = useState(''); // session object after registration / login

    const Login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if(error){
          setLMsg(error.message)
          console.log(error)
        }else{
          setLMsg('Login successfully')

          setUser(data.user)
            setUserSession(data.userSession)
            router.push("/users/settings")
         
        }
      }
  return(
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
   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
            
                  <div>
                      <label for="email" className="block mb-2 text-sm 
                      font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" 
        
                      placeholder="name@company.com"
                      onChange={(e) => setEmail(e.target.value)}  />
                  </div>
                  <div>
                      <label for="password" >Password</label>
                      <input type="password"  placeholder="••••••••" 
                    
                       onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                            id="remember" 
                            aria-describedby="remember" 
                            type="checkbox" 
                           />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember">Remember me</label>
                          </div>
                      </div>
                      <a href="/resetLink" >Forgot password?</a>
                  </div>
                  <button onClick={Login}>Sign in</button>
    <p>{Lmsg}</p>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              
              </>
)
 }
 </div>
 </div>
   </div>
</section>
  )
}


  


