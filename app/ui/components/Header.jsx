
import  Stepper  from "./Stepper";
import {v2 as cloudinary} from 'cloudinary';





export default async function Header(){
  const {resources} = await cloudinary.api.resources_by_tag("entrypage")
const mobileResource= await cloudinary.api.resources_by_tag("mobileEntrypage")



const imageUrl=resources[0].secure_url
const mobileUrl=mobileResource.resources[0].secure_url



   
 

  
    return (
   <>
 
        
 <div className=" max-w-xl inline-flex justify-center" >
   
  
       <img className="invisible md:visible md:absolute md:opacity-25" src={imageUrl}/>
       <img className="visible absolute opacity-25 md:invisible" src={mobileUrl}/>
      
        <section class="-translate-x-60 sm:-translate-x-50 
        md:translate-x-0 md:relative md:pb-24">
          <div class="md:mx-auto">
            <div class="py-24 md:py-36">
              <h1 class="mb-5 text-6xl font-bold">
              <div className=" z-40"><Stepper/></div>
              </h1>
            </div>
          </div>
      
        </section>
        </div>
        
      </>
        
    )
}
