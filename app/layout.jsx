import '../styles/globals.css';


import Navbar from '../components/NavBar';
import  Footer  from '../components/Footer';
import Navedit from '../components/NavEdit';
import AuthProvider from '../components/Auth/AuthProvider';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from 'react';



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
   
 
      <body>
				
      <AuthProvider accessToken={accessToken}>
        <main className="app">
   
            <Navedit />
    
    
            <Navbar />
       
            {children}
         
          </main>
          <Footer />
          </AuthProvider>
    
       
    </body>
  </html>
  )
}

