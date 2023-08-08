'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import BlogForm from "@components/BlogForm";



const CreateBlog = () => {
 
  const { data: session } = useSession();
  const ruter = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", text:"", tag: "", category:"", imageUrl:"" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState({ imgUrl: "" });




    const createBlog = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/blog/new", {
          method: "POST",
          body: JSON.stringify({
            title: post.title,
            text: post.text,
            userId: session?.user.id,
            tag: post.tag,
            category: post.category,
            imageUrl:imgUrl
          }),
        });
        if (response.ok) {
          ruter.push("/dashboard");
          console.log('router pushed');
          console.log(response);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsSubmitting(false);
      }
    };
    const handleFileUpload = (event) => {
      setSelectedImage(event.target.files[0]);
     
    };
    const handleSubmit = async () => {
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
        setImgUrl(secureUrl);
        
        console.log('Image uploaded successfully!', data);
        console.log('the url that will be passed:', secureUrl);
       
    /*     await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imageUrl: secureUrl }),
        });
        console.log('Image URL sent to API and stored in the database.'); */ 

      } catch (error) {
        console.error('Failed to upload image.');
      }
  
    };

    return (
      <section className='w-full max-w-full flex-start flex-col md:flex-row gap-8'>
        <section className='relative max-lg:w-screen mx-auto flex start flex-col gap-5 items-center justify-center'>
          <input type="file" accept="image/*" onChange={handleFileUpload} />
          {selectedImage && (
            <div>
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" height="200" />
              <button type="submit" className='px-5 py-1.5 text-sm border-black rounded shadow text-marron-oscuro' onClick={handleSubmit}>Upload</button>
            </div>
          )}
        </section>
   
        <BlogForm
          session={session}
          type='Add New'
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createBlog}
          imgUrl={imgUrl}

        />
      </section>
    
    
    )
  }

export default CreateBlog