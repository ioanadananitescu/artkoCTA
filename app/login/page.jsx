import AuthButtonClient from "@app/auth-button-client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { redirect } from 'next/navigation';

export default async function LoginPage() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    
    if (session) {
        redirect ("/logged")
    }
    return <AuthButtonClient session={session}/>


}