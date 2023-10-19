import '@styles/globals.css';
import '@styles/auth-form.css';

import Navbar from '@components/NavBar';
import  Footer  from '@components/Footer';
import Navedit from '@components/NavEdit';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
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
  const { data: { session } } = null ||  await supabase.auth.getSession() 

  
  
  return (
    
  <html>
   
 
      <body>
				
  
        <main className="app">
   
         <Navedit session={null||session} />
    
    
            <Navbar />
       
            {children}
         
          </main>
          <Footer/>
    
       
    </body>
  </html>
  )
}

