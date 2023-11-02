import AuthProvider from "../../components/Auth/AuthProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from 'react';



export default async function AuthHomeLayout({ children }) {
    
    const createServerSupabaseClient = cache(() => {
        const cookieStore = cookies()
        return createServerComponentClient({ cookies: () => cookieStore })
    })
    
     const supabase=createServerSupabaseClient()

    const {
        data: { session },
      } = await supabase.auth.getSession();
    
      const accessToken = session?.access_token || null;

return(
    <>
    <div className="relative h-full">
   
    
    </div>
    <AuthProvider accessToken={accessToken}>
    <main className='p-4'>
        {children}
    </main>
    </AuthProvider>
    
    </>
)

}