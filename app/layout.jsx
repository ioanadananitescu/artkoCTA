import '@styles/globals.css';
import '@styles/auth-form.css';

import Navbar from '@components/NavBar';
import  Footer  from '@components/Footer';
import Navedit from '@components/NavEdit';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { cookies } from 'next/headers';


export const metadata={
    title:"Artko",
    description:'online art platform showcasing art'
  }

export default async function RootLayout ({children}) {

 const supabase=createServerComponentClient({cookies})
  const {data:{session}}=await supabase.auth.getSession()
  
  
  return (
    
  <html>
   
 
      <body>
				
  
        <main className="app">
   
         <Navedit session={session} />
    
    
            <Navbar />
       
            {children}
         
          </main>
          <Footer/>
    
       
    </body>
  </html>
  )
}

