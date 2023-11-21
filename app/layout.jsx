import '../styles/globals.css';
import  Footer  from '../components/Footer';
import AuthProvider from '../components/Auth/AuthProvider';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from 'react';
import {inter} from './ui/fonts/fonts';



export const metadata={
    title:"Artko",
    description:'online art platform showcasing art'
}

  

export default async function RootLayout({ children }) {

    
const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
})

const supabase=createServerSupabaseClient()

const {
  data: { session },
} = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  

  
  return (
    
  <html>
   
 
      <body className={`${inter.className} antialiased`}>
				
      <AuthProvider accessToken={accessToken}>
        <main >
   
    
   
       
            {children}
         
          </main>
          {/* <Footer /> */}
          </AuthProvider>
    
       
    </body>
  </html>
  )
}

