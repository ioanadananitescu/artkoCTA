'use client'
import React, {useState} from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ResetForm() {
   const [email, setEmail]=useState('')
   
    const[RMsg, setRMsg] = useState('')
  
     
  
      
const supabase=createClientComponentClient();
const Reset = async () => {
    const {data, error} = await supabase.auth.resetPasswordForEmail(email);
   
    if(error){
      setRMsg(error.message)
      return
    
    }else{
      setRMsg('User created successfully')
     setEmail(data.user.email)
    }
    }


  
  return (
  
 <>
  

    <h1 className="text-3xl text-slate-800 
    font-bold mb-6">Reset your Password ✨</h1>

    <form >
        <div className="space-y-4">
            <div>
                <label className="block text-sm 
                font-medium mb-1">Email Address 
                <span className="text-rose-500">*</span></label>
                <input id="email_to_reset" 
                className="form-input w-full" 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
         
        </div>
        <div className="flex justify-end mt-6">
            <button 
            onClick={Reset}
            className="btn bg-indigo-500 
            hover:bg-indigo-600 text-white whitespace-nowrap" 
            id="reset_link_btn"
            >Send Reset Link</button>
        </div>
        
        <div className="text-sm">
            Have an account? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="signin.html">Sign In</a>
        </div>
  
    </form>

</>
    
   
  )
}


