

import Navbar from '@components/NavBar';
import Navedit from '@components/NavEdit';
import '@styles/globals.css';

import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

export default async function ArtistSell(){
   
  const {resources} = await cloudinary.api.resources_by_tag("frontpage")


  return (
    <>   

   <section className="text-gray body-font">

    
      <div className="max-w-7xl mx-auto flex px-5  md:flex-row flex-col items-center">



        
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex 
        flex-col md:items-start md:text-left mb-70 items-center text-center">
          <h1 className="mb-10 sm:text-7xl text-5xl 
          items-center font-sans font-extrabold xl:w-2/2 
          text-transparent bg-clip-text bg-gradient-to-r 
          from-gray-800 to-blue-600 dark:from-gray-300 dark:to-cyan-400 ">
            Showcasing Beauty and Emotions
          </h1>
             <p className="mb-10 xl:w-3/4 text-gray-600  text-lg 
             font-bold text-transparent bg-clip-text bg-gradient-to-r 
             from-cyan-600 dark:from-cyan-300 to-sky-800 dark:to-gray-200">
            Experience the transformative power of creation. 
            Free your soul and let us take care of the rest. 
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center 
              px-5 py-2 mt-2 font-medium text-sky-800 
              dark:text-blue-200 transition 
              duration-500 ease-in-out transform dark:border-none 
              rounded-lg  bg-gradient-to-r from-gray-400/30 
              to-gray-600/30 hover:bg-gray-600/30 hover:text-cyan-200 
              dark:bg-gradient-to-r dark:from-sky-800 dark:to-cyan-300"
              href=""
            >
              <span className="justify-center">Join us TODAY</span>
            </a>
          </div>
          </div>
     
               <div className="sm:columns-1 md:columns-2 lg:columns-2 xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-40 md:pl-10">
       
                {resources.map((resource)=>{
                  return(
                    <div key={resource.public_id} className="h-auto w-85 md:w-60 md:ml-1 ml-10">
                     <img
                          src={resource.secure_url}
                          width={resource.width}
                          height={resource.height}
                          alt={resource.public_id}
                          className=" py-6 sm:py-4 w-full" />
                      
                    </div>
                  )
                }
                )}
             
    
      </div>
      </div>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl font-sans font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-cyan-300 to-sky-800 dark:to-gray-200">
          It's time to share your creativity and make your mark on the global art scene.
        </h1>
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
        
        
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src=""
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-sans font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-cyan-300 to-sky-800 dark:to-gray-200">
         
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-8 text-2xl font-sans font-bold text-gray-900 
            text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 
            dark:from-cyan-300 to-sky-800 dark:to-gray-200">
        
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="myartistname@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-gray transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
               <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>


      </section>
    
      </>


  )
}
