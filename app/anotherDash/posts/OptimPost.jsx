'use client'


import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Likes from './likes';
import { experimental_useOptimistic as useOptimistic } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NewPosts({ posts }) {
    const [optimisticPost, addOptimisticPost] = useOptimistic(
        posts, (currentOptimisticPosts, newPost) => {
            const newOptimisticPosts = [...currentOptimisticPosts];
            const index = newOptimisticPosts.findIndex((post) =>post.id === newPost.id);
            newOptimisticPosts[index] = newPost;
            return newOptimisticPosts;
        }
    )
const supabase=createClientComponentClient()
const router=useRouter()
    useEffect(() =>{
        const channel=supabase
        .channel('update new post in realtime')
        .on('postgres_changes',
        {
            event:"*",
            schema:"public",
            table:"posts"
        },
        (payload)=>{
           router.refresh();
        })
        .subscribe()
        return ()=>(
            supabase.removeChannel(channel)
        )
    }, [supabase,router])

    return optimisticPost.map((post) => (
            <div className= "border border-gray-800 border-t-0 px-4 py-8 flex" key = { post.id } >
                    <div className="h-12 w-12">
   
    <Image src={post.princ_image_url}  alt="this is your work" width={300} height={100}/>
  



        </div>
        <div className="ml-4">
        <p>
          <span className="font-bold">{post.profiles.username}</span>
          <span className="text-sm ml-2 text-gray-400">
            {post.profiles.website}
          </span>
        </p>
        <p>{post.title}</p>
        <span className="text-sm ml-2 text-gray-400">{post.body}</span>
        <p>{post.tags}</p>
        < Likes post={post} addOptimisticPost={addOptimisticPost} />
      
      </div>
      </div>


        
 
    )
    )
                }
    
    
    
