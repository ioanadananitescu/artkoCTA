
'use client'
import { useState } from 'react';
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { category } from './data';



const BlogForm = ({ session, type, post, setPost, submitting, handleSubmit, imgUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(['']);
  
  const handleSelectedValue = (event) => {
    setSelectedValue(event.target.value);
  }
    
  return (
    <section className='w-full max-w-full flex-start flex-col md:flex-row gap-8'>
{/*       <section className='relative max-lg:w-screen mx-auto flex start flex-col gap-5 items-center justify-center'>
        <ImageUpload      
            />
        <p>You can add a new work </p>
        <div className='flex-end mx-3 mb-5 gap-4'>
        <button
            type='submit'
            onClick={()=>{}}
            
            className='px-5 py-1.5 text-sm  border-black rounded shadow text-marron-oscuro'
          >
            Share
        </button>
        <button
            type='submit'
           onClick={()=>{}}
            className='px-5 py-1.5 text-sm border-black rounded shadow text-marron-oscuro'
          >
          Back
          </button>
          </div>
      </section> */}

      <section className='flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='marron_gradient'>{type} blog</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} blog and share your experience with the rest of the world.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
           <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>

          <textarea
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder='Here comes your title. Make it short and expressive.'
            required
            className='form_textarea '
          />
        </label>
          <label>
            <div>
             
              <Image
                src={imgUrl} width={200} height={200} />
            </div>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Image is stored in Cloudinary with the url{" "}
           
          </span>
          <input
            value={imgUrl}
            onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
            type='text'
            placeholder='Image'
            required
            className='form_input'
          />
          </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>

          <textarea
            value={post.text}
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            placeholder='Write your story here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Keywords{" "}
            <span className='font-normal'>
              (#luxuryart, #originalartforsale, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
          </label>
          
          <label htmlFor='dropdown'>Select a category for the blog:     
<select 
value={post.category}
className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
id="grid-medium"
onChange={(e)=>
    setPost({...post, category:e.target.value})
} 
placeholder="Select the  medium"
required>
    {category.map((e)=>(
    <option key={e.id} value={e.name}>{e.name}</option>
    ))}
</select>
          </label>

  
    

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
        </form>
        </section>
    </section>
  )
};

export default BlogForm;