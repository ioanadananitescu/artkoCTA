'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useRef } from "react";
import { addPost } from "./insertData";



export default  function NewPost() {

  

  const [status, setStatus] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState({imageUrl:""});

 const formRef=useRef()
  
// handle image upload
const handleFileUpload = (event) => {
  setSelectedImage(event.target.files[0]);
  setSelectedImage(URL.createObjectURL(file));
   
}
const handleImageSubmit=async () => {
    
  const formData = new FormData();
  formData.append('file', selectedImage);
 
 
  formData.append('upload_preset', 'artkonext');

  const data= await fetch('https://api.cloudinary.com/v1_1/dlel1msov/image/upload', 
  {
    method:'POST',
    body:formData
  }).then(r=>r.json());

  const secureUrl=data.secure_url;
  setImageUrl(secureUrl);
}


const handleFormSubmit = async (e) => {
  e.preventDefault();
  
 
  try {
    if(formRef.current){
      const formData = new FormData(formRef.current);
//upload image to cloudinary and return imageUrl 


//upload data from the form to the supabase table using the server function addPost

    const res= await addPost(formData);
    formRef.current.reset()
    }
    if (res.error === null && res.status === 201) {
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 5000);
    
    }
   
}catch (error) {
  if (error && typeof error === 'object' && "message" in error) {
    console.error("Error from server action:", error.message);
}
}


}
  
        
    
    return (
      <section className='w-full max-w-full flex-start flex-col md:flex-row gap-8'>
      <section className='relative max-lg:w-screen mx-auto flex start flex-col gap-5 items-center justify-center'>
      <h1 className="fs-1 m-3"> Add new work</h1>
     <form onSubmit={handleImageSubmit}>
     <label>Image
      <input type="file" accept="image/*" className="bg-inherit" onChange={handleFileUpload} >
            </input>
            </label>
            {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" width="200" height="200" />
          </div>
          )}
        
     </form>
    </section>
        <section className='flex-start flex-col'>
        <h1 className='head_text text-left'>
          <span className='marron_gradient'>Dashboard</span>
        </h1>
        <p className='desc text-left max-w-md'>
          Publish your work and share it with the world
        </p>

      
          
        

        <form onSubmit={(e)=>{handleFormSubmit(e)}} ref={formRef}>

<label>Image URL
 
<input type="text" name="imageUrl" value={imageUrl}/>

            </label>
            <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>
          <input 
          name="title" 
         
          type="text"
            placeholder="Title"
           
            className='form_input'>
            </input>
          
        </label>
         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>
          <input 
          name="body" 


          type="text"
            placeholder="Describe your artwork"
           
            className='form_input'>
            </input>
          
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Keywords
            <span className='font-normal'>
              (#luxuryart, #cheapart, #originalartforsale, etc.)
            </span>
          </span>
          <input name="tags" 
      
       
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
           
          />
          </label>
          <div>
            <button
              className="outline_button cursor:pointer "
              type="submit"
              
            
            >
              Submit your artwork
            </button>
            </div>
            {status && (
        <div className="font-satoshi font-semibold text-base text-gray-700">
          User registered successfully!
        </div>
      )}
</form>
        </section>
        </section>
    )
        }