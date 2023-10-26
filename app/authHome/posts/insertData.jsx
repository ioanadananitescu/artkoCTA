'use server'
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"




  
    export const addPost = async (formData) => {
       
        const title = String(formData.get('title'))
        const body=String(formData.get('body'))
        const tags=String(formData.get('tags'))
        const imageUrl=String(formData.get('imageUrl'))
       
        
        const supabase = createServerActionClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) throw new Error("No user found");

        try {
            const response= 
            await supabase.from('posts').insert({ title, body, tags, princ_image_url:imageUrl, author: user.id }) 
            
          return response
            
          }

        
        catch(error){
           console.error( "Error adding feed", error);
           throw error;
        }
    }

