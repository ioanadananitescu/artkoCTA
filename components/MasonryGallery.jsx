import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})




export default async function MasonryGallery(){
  const {resources} = await cloudinary.api.resources_by_tag("painting")
console.log(resources)

  return(
<>
<div id="scroll" className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl font-sans font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 dark:from-black-300 to-gray-800 dark:to-gray-200">
       Our latest inspiration
        </h1>
      
            </div>
    <div class="sm:columns-2 md:columns-3 gap-8">
        

    {resources.map((resource)=>{
                  return(
          
            <div className="relative group hover:cursor-pointer" key={resource.public_id}>
                     <img 
                          src={resource.secure_url}
                         width={resource.width}
                         height={resource.height}
                          alt={resource.public_id}
                          className="w-full rounded-md mb-5"/>
              <div className="absolute bottom-0 px-4 py-3  w-full 
              opacity-0 group-hover:opacity-100 cursor-pointer">
                <h1>{resource.metadata.fine_art}</h1></div>
              </div>
            
                   
                    
                  )
                }
                )}
</div>

<a
              className="inline-flex items-center 
              px-5 py-3 mt-2 font-medium text-lg text-sky-800 transition 
              duration-500 ease-in-out transform dark:border-none 
              rounded-lg  bg-gradient-to-r from-gray-400/30 
              to-gray-600/30 hover:bg-gray-600/30 hover:text-cyan-200 
              dark:bg-gradient-to-r dark:from-sky-800 dark:to-cyan-400
              dark:text-blue-200"
              href=""
            >
              <span className="justify-center">Join us now and let your work shine!</span>
            </a>

        </>
  )
  }