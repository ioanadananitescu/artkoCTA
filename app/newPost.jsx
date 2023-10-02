
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"


export default function NewPost() {
  
    const addPost = async (formData) => {
        'use server'
        const title = String(formData.get('title'))
        const supabase = createServerActionClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            await supabase.from('posts').insert({ title, author: user.id }) 
            
        }
    

        
    }
   
 
    return (
        <form action={addPost}>
            <input name="title" className="bg-inherit" >
            </input>
        </form>
    )


}