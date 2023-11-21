import "./data-tables-css.css";
import "../../styles/globals.css";
import { lusitana } from "../ui/fonts/fonts";
import AnotherDash from "./dashboard";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';


export default async function AnotherDashLayout({children}){
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
      
    


        return (
            <>
       
                    <main>
                    <AnotherDash session={session}/>
                  <div className={`${lusitana.className} mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 
                  -translate-y-1/4 2xsm:-translate-y-1/4 lg:-translate-y-2/4`}>
                    {children}
                  </div>
                </main>
            
                </>
              
           
             
    
        
    )


}