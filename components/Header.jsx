import Navbar from "@components/NavBar";
import  Stepper  from "@components/Stepper";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})




export default async function Header(){
  const {resources} = await cloudinary.api.resources_by_tag("entrypage")



const imageUrl=resources[0].secure_url


   
 

  
    return (
   <>
 
        
 <div className=" max-w-xl inline-flex justify-center" >
   
  
       <img className="invisible md:visible md:absolute md:opacity-25" src={imageUrl}/>
       
        <section class="-translate-x-60 sm:-translate-x-50 md:translate-x-0 md:relative md:pb-24">
          <div class="md:mx-auto">
            <div class="py-24 md:py-36">
              <h1 class="mb-5 text-6xl font-bold">
              <div className=" z-40"><Stepper/></div>
              </h1>
           
          {/*     <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autocomplete="email"
                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <a
                class="inline-flex items-center px-14 py-3 mt-28
                ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span class="justify-center">Subscribe</span>
              </a> */}
             
            </div>
          </div>
      
        </section>
        </div>
        
      </>
        
    )
}
