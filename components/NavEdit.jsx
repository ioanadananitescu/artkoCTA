"use client";


import Link from 'next/link';
import {useState, useEffect} from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';





export default  function Navedit(){
  const router=useRouter();


  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
   router.push('/authHome')

    if (error) {
      // eslint-disable-next-line no-console
      console.error('ERROR:', error);
    }
  }
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

   

 



  return (
  
 <nav className="flex  justify-end w-full mb-16 pt-3">
        <div className="flex relative">

        <div className="z-50  mr-10 flex flex-center"><ThemeSwitcher/></div>
    
        <div  class="flex gap-2 md:order-2 z-50">

          {/* log out button */}
          {session && <button
            className=" inline-flex border-none items-center 
          justify-center p-2 rounded-md text-gray-400 
          hover:text-white hover:bg-marron-clarisimo 
          focus:outline-none  focus:ring-offset-gray-800 
          focus:ring-white"
          onClick={handleSignOut}
          >
       
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
              fill="#fff"
              stroke="0.5"
            >
 
              <path
                d="M40.167 49.204c-13.565 0-24.602-11.037-24.602-24.602S26.601 0 40.167 0s24.602 11.037 24.602 24.602-11.037 24.602-24.602 24.602zm0-43.204C29.91 6 21.565 14.345 21.565 24.602s8.345 18.602 18.602 18.602 18.602-8.345 18.602-18.602S50.424 6 40.167 6z"
                transform="matrix(2.81 0 0 2.81 1.407 1.407)"
              ></path>
              <path
                d="M46.435 90H9.092a3 3 0 01-3-3v-9.722c0-18.789 15.286-34.074 34.074-34.074 4.781 0 9.406.971 13.747 2.888a3 3 0 11-2.424 5.488 27.87 27.87 0 00-11.323-2.376c-15.48 0-28.074 12.594-28.074 28.074V84h34.342a3 3 0 01.001 6zM76.678 67.535a3 3 0 01-3-3v-6.199a5.278 5.278 0 00-5.271-5.272h-1.482a5.278 5.278 0 00-5.271 5.272v6.199a3 3 0 11-6 0v-6.199c0-6.216 5.057-11.272 11.271-11.272h1.482c6.215 0 11.271 5.057 11.271 11.272v6.199a3 3 0 01-3 3z"
                transform="matrix(2.81 0 0 2.81 1.407 1.407)"
              ></path>
              <path
                d="M79.656 64.535H55.675a3.02 3.02 0 00-3.021 3.021v19.423A3.02 3.02 0 0055.675 90h23.981a3.02 3.02 0 003.021-3.021V67.556a3.022 3.022 0 00-3.021-3.021zm-8.991 14.046a3 3 0 11-6 0v-1.809a3 3 0 116 0v1.809z"
                transform="matrix(2.81 0 0 2.81 1.407 1.407)"
              ></path>
      
            </svg>
    
  

          </button>
          }
        
{/* log in sign in button */}
         

          {!session && <button
            className=" inline-flex border-none items-center 
            justify-center p-2 rounded-md text-gray-400 
            hover:text-white hover:bg-marron-clarisimo 
            focus:outline-none  focus:ring-offset-gray-800 
            focus:ring-white">
            <Link href="/authHome">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30 "
                height="30"
                viewBox="0 0 256 256"
                fill="#fff"
                stroke="0.5"
              >
     
                <path
                  d="M86.114 90h-6.067c0-19.325-15.722-35.047-35.047-35.047C25.675 54.953 9.954 70.675 9.954 90H3.886C3.886 67.329 22.33 48.886 45 48.886c22.671 0 41.114 18.443 41.114 41.114zM45 46.488c-12.817 0-23.244-10.427-23.244-23.244S32.183 0 45 0c12.816 0 23.244 10.427 23.244 23.244S57.816 46.488 45 46.488zm0-40.421c-9.471 0-17.176 7.705-17.176 17.176 0 9.471 7.705 17.177 17.176 17.177 9.471 0 17.176-7.705 17.176-17.177 0-9.47-7.705-17.176-17.176-17.176z"
                  transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                ></path>
      
              </svg>
      
    
            </Link>
          </button>
          }
          

         
    
       


    
        
     {/* secure user sign in  */}
     <button
              className=" inline-flex items-center 
              justify-center p-2 rounded-md text-gray-400 
              hover:text-white hover:bg-marron-clarisimo 
              focus:outline-none  focus:ring-offset-gray-800 
              focus:ring-white border-none">
<Link className="" href="/auth-form">
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 256 256"
    >
      <g fill="#fff" strokeMiterlimit="10" strokeWidth="0.5">
        <path
          d="M45 34.78c-9.589 0-17.39-7.801-17.39-17.39S35.411 0 45 0s17.391 7.801 17.391 17.39S54.589 34.78 45 34.78zM45 7c-5.729 0-10.39 4.661-10.39 10.39S39.271 27.78 45 27.78c5.729 0 10.391-4.661 10.391-10.39S50.729 7 45 7zM69.417 90a3.5 3.5 0 01-3.5-3.5V61.756c0-7.28-5.923-13.203-13.203-13.203H37.287c-7.28 0-13.203 5.923-13.203 13.203V86.5a3.5 3.5 0 11-7 0V61.756c0-11.14 9.063-20.203 20.203-20.203h15.427c11.14 0 20.203 9.063 20.203 20.203V86.5a3.5 3.5 0 01-3.5 3.5z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          d="M53.53 67.716H48.5v-5.03a3.5 3.5 0 10-7 0v5.03h-5.031a3.5 3.5 0 100 7H41.5v5.031a3.5 3.5 0 107 0v-5.031h5.03a3.5 3.5 0 100-7z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
</Link>
</button>
</div>
</div>
 </nav>
  )
}

