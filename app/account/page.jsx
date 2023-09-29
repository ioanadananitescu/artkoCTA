import NewPost from '@app/newPost'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './account-form'

import PostForm from './posts-form'


export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: { user: { user_metadata:{user_name} } } } = await supabase.auth.getUser()
 
  return (
    <section className='w-full'>
    <h1 className='head_text text-left'>
        <span className='blue_gradient'>{user_name} Dashboard</span>
    </h1>
    
      <AccountForm session={session} />
      <div>
        <NewPost />
       
</div>
      <PostForm/>



  
  </section>




  )
}