import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './account-form'
import PostsForm from './posts-form'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {data:posts}=await supabase.from("posts").select("*, profiles(*)");

  return(
    <>
  <section className='w-full'>
  <h1 className='head_text text-left'>
    <span className='blue_gradient'> Dashboard</span>
  </h1>
  

  <div className='mt-10 prompt_layout'>
     <AccountForm session={session} />
     <PostsForm session={session}/>
     </div>
     {posts?.map((post) => (
        <div key={post.id}>
          <p>
            {post?.profiles?.username} {post?.profiles?.full_name} {post?.profiles?.website}
          </p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
     </section>
     </>

  )
}