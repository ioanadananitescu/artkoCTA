import NewPost from '@app/newPost'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './account-form'
import Navedit from '@components/NavEdit'

import PostForm from './posts-form'


export default async function Settings(){
    const supabase = createServerComponentClient({ cookies })

    const {
      data: { session },
    } = await supabase.auth.getSession()
  
    const { data: { user } } = await supabase.auth.getUser()
   
    return (
        <>
        <Navedit session={session}/>
      <AccountForm session={session} />
 
   

        </>

    )
}