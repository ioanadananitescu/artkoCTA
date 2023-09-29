"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/dashboard");

    router.push(`/dashboard/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (

    <div className="flex flex-col ">
    <div className="bg-luxury shadow-md  rounded-xl p-4">
        <div className="flex-none lg:flex">
          <img className="w-full  object-scale-down lg:object-cover  lg:h-48 rounded-xl" src={post.imageUrl} alt='uploaded art image' />
        </div>
        <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">

                            </div>
                            <h2 className='flex-auto text-lg font-medium'>{post.prompt}</h2>
                        </div>
              {/* //logged // creator user data                  */}
              <div
            className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
            onClick={handleProfileClick}
          >

           {/*creator post profile image, if he does one*/}
       {/*      <Image
              src={post.creator.image}
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
            /> */}

            <div className='flex flex-col'>
              <p className='font-satoshi font-semibold text-gray-900'>
              
                 {post.creator.username} 
              </p>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator.email}
              </p> 
            </div>
          </div>
           
                        
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                          
              <p className='font-inter text-sm blue_gradient cursor-pointer'
               onClick={() => handleTagClick && handleTagClick(post.tag)}>Tags: #{post.tag}</p>
            </div>
            
            <div class="flex-1 inline-flex items-center">
          

              <p class="">Medium: {post.medium}</p>
            </div>
          </div>
          <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
            
              {session?.user.id === post.creator._id && pathName === "/dashboard" && (
                <div>
            <button onClick={handleEdit}
            className='mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2'>
              <p
                className='font-inter text-sm green_gradient cursor-pointer'
                
              >
                Edit
                  </p>
                  </button>
                  <button onClick={handleDelete}
                    className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                    type="button"
                    aria-label="like"><p
                className='font-inter text-sm orange_gradient cursor-pointer'
                
              >
                Delete
                  </p></button>
              </div>    
                    )}
               
          </div></div></div></div></div>
      )
    }
          
          {/* 
          <div
            className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
            onClick={handleProfileClick}
          >
            <Image
              src={post.creator.image}
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
            />

            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username}
              </h3>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator.email}
              </p>
            </div>
          </div>

          <div className='copy_btn' onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
              width={12}
              height={12}
            />
          </div>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className=''>
        
          </div>

     
      
        </div>

        {session?.user.id === post.creator._id && pathName === "/dashboard" && (
          <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
            <p
              className='font-inter text-sm green_gradient cursor-pointer'
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className='font-inter text-sm orange_gradient cursor-pointer'
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div> 
        </div>*/}

          

export default PromptCard