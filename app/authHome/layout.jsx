import AuthProvider from "@components/Auth/AuthProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AuthHomeLayout({children}){
    const supabase = createServerComponentClient({ cookies });

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