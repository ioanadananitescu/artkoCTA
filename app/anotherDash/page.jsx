
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';

import OptimPost from './posts/OptimPost';

import NewPost from './posts/newPost';



export default async function anotherDash(){
    
      const supabase = createServerComponentClient({cookies})
    
        const { data: { session } } = await supabase.auth.getSession()
        const user = session?.user
        const { data } = await supabase
            .from('posts')
            .select('*, profiles(*), likes(*)')
        .eq('author',user?.id)
      
        const posts = data?.map(post => ({
            ...post,
            user_has_liked_post: post.likes.find(like => like.user_id === session.user.id), 
            likes:post.likes.length  
        }))??[]
    
      if (!session) {
        redirect('/authHome')
      }
    
    
      return (
        <>
          <div className='gap-2 flex sm:flex-col flex-wrap md:flex-row justify-center items-center md:w-screen'>
            <NewPost/>
            <OptimPost posts={posts}/>
            </div>
                  
          
          </>
      )
    }
