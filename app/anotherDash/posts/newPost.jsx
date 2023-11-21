'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useRef } from "react";
import { addPost } from "./insertData";
import PaintingsSkeletonCard from '../../../components/PaintingsSkeletonCard'



export default  function NewPost() {

  

  const [status, setStatus] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState({imageUrl:""});
  const [loading, setLoading] = useState(false);

 const formRef=useRef()
  
// handle image upload

const handleFileUpload = (event) => {
 
  setSelectedImage(event.target.files[0]);
  const reader = new FileReader();
  reader.onloadend = async () => {
    setLoading(true);
  };
 
 
};
  const handleImageSubmit= async () => {
  
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', 'artkonext');
    try {
      const data = await fetch('https://api.cloudinary.com/v1_1/dlel1msov/image/upload',
        {
          method: 'POST',
          body: formData
        }).then(r => r.json());
      const secureUrl = data.secure_url;
      setImageUrl(secureUrl);
      setLoading(false);
      
      console.log('Image uploaded successfully!', data);
      console.log('the url that will be passed:', secureUrl);
    } catch (error) {
      console.error('Failed to upload image.');
    }

      
    

  };
  
 


//right part of the screen, second form
const handleFormSubmit = async (e) => {
  e.preventDefault();
  
 
  try {
    if(formRef.current){
      const formData = new FormData(formRef.current);
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
      <section className='w-full max-w-full flex flex-start md:flex-row gap-3'>
       
      <section className='relative max-lg:w-50 mx-auto flex start flex-col gap-3 items-center justify-center'>
   <span>
   <h1 className='marron_gradient'> Add new work</h1>
   </span>
     
     <>
     <label>Image
      <input type="file" accept="image/*" className="bg-inherit" onChange={handleFileUpload} >
            </input>
            </label>
            {selectedImage?(  
        <div>
        
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" height="200" />
          
          </div>
            ):(<PaintingsSkeletonCard/>)}
          
          <button className='px-5 py-1.5 text-sm border-black rounded shadow misty-blue' onClick={handleImageSubmit}>Upload</button>
     </>
    </section>
        <section className='flex-start flex-col'>
       
        <p className='desc text-left max-w-md'>
          Publish your work and share it with the world
        </p>

      
          
        

        <form onSubmit={(e)=>{handleFormSubmit(e)}} ref={formRef}>

<label>Uploaded
 {loading?(<PaintingsSkeletonCard/>

          ):(<div >
            <img src={imageUrl} alt="Selected" width="200" height="200" />
           <input type="text" name="imageUrl" value={imageUrl} className="hidden" /> 
            </div>)}

            </label>
            <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>
          <input 
          name="title" 
         
          type="text"
            placeholder="Title"
           
            className='px-5 py-1.5 text-sm border-black rounded shadow text-marron-oscuro'>
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
              className="px-5 py-1.5 text-sm border-black rounded shadow misty-blue"
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