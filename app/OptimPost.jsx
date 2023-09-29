
import Likes from './likes';

export default function NewPosts({ posts }) {

    return posts?.map((post) => (
            <div className= "flex-none lg:flex shadow-md rounded-xl p-4" key = { post.id } >
            <div className="flex-none lg:flex" >
                <h2 className='flex-auto text-lg font-medium' > {post.title} </h2>
                    < div className = "flex-none lg:flex" > { post?.profiles?.username }
                        </div>
                        < div className = "flex-none lg:flex" > { post?.profiles?.website }
                            </div>
                            </div>
                            < Likes post = { post } />
              
                             
            
                                </div>
        
 
    )
    )
                }
    
    
    
