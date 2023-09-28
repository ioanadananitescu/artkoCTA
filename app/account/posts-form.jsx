
import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { supabase } from '@supabase/auth-ui-shared';
import { cookies } from 'next/headers';

export default function NewPost() {
const addPost= async(formData)=>{
    "use server"
    const title=String(formData.get('title'));
    const body=String(formData.get('body'));
    const supabase=createServerActionClient({cookies})
    const {data:{user}}=await supabase.auth.getUser()
    if(user){
        await supabase.from("posts").insert({title, body,
            author:user.id});
    }
   
}


return(
    <form action={addPost}>
        <input name="title" type="text" placeholder='Post Title' className="bg-inherin"/>
      

    </form>
)
}

  