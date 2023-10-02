'use client'


import Likes from './likes';
import { experimental_useOptimistic as useOptimistic } from 'react';

export default function NewPosts({ posts }) {
    const [optimisticPost, addOptimisticPost] = useOptimistic(
        posts, (currentOptimisticPosts, newPost) => {
            const newOptimisticPosts = [...currentOptimisticPosts];
            const index = newOptimisticPosts.findIndex((post) =>post.id === newPost.id);
            newOptimisticPosts[index] = newPost;
            return newOptimisticPosts;
        }
    )

    return optimisticPost.map((post) => (
            <div className= "flex-none lg:flex shadow-md rounded-xl p-4" key = { post.id } >
            <div className="flex-none lg:flex" >
                <h2 className='flex-auto text-lg font-medium' > {post.title} </h2>
                    < div className = "flex-none lg:flex" > { post.profiles?.username }
                        </div>
                        < div className = "flex-none lg:flex" > { post.profiles?.website }
                            </div>
                            </div>
            < Likes post={post} addOptimisticPost={addOptimisticPost} />
              
                             
            
                                </div>
        
 
    )
    )
                }
    
    
    
