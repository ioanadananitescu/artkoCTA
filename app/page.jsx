
import FeedFirstPage from '@components/FeedFirstPage';
import Navbar from '@components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

import FirstPageFeed from '@components/FirstPageFeed';
import ImageFrontPage from '@components/ImageFrontPage';

const Home = () => {
  
  return (
    <>
<Navbar />
   
         
   <section className="">
    <div className="relative">

      <ImageFrontPage/>
{/*     <img
    	sizes="(min-width: 30em) 65em, 100vw"

    	srcset="https://res.cloudinary.com/dlel1msov/image/upload/f_auto,q_70,w_256/v1687341642/artko/bioartsetup.jpg 256w,
      https://res.cloudinary.com/dlel1msov/image/upload/f_auto,q_70,w_512/v1687341642/artko/bioartsetup.jpg 512w,
      https://res.cloudinary.com/dlel1msov/image/upload/f_auto,q_70,w_768/v1687341642/artko/bioartsetup.jpg 768w,
      https://res.cloudinary.com/dlel1msov/image/upload/f_auto,q_70,w_1500/v1687341642/artko/bioartsetup.jpg 1500w,
      https://res.cloudinary.com/dlel1msov/image/upload/f_auto,q_70,w_1600/v1687341642/artko/bioartsetup.jpg 1600w"
    	src="https://res.cloudinary.com/dlel1msov/image/upload/w_2000,h_1600/v1687341642/artko/bioartsetup.jpg 1600w"
    	alt /> */}



         {/*  <Image
            width={1500}
            height={700}
      className="md:hidden w-screen mx-auto"
     src="/assets/images/mobileFeatured.jpg"
     
          alt="Best art every week. Curated art from our artists."
        />
          <Image
            width={1600}
            height={800}
        
            class="hidden md:max-3xl:block mx-auto left-0 right-0 w-screen"
          src="/assets/images/horizontalFeatured.png"
         
          alt="Every week our curators find art to feature." /> 
        <Link href="https://shop.artko.ro/featured"
          class="absolute tracking-wide text-4xl md:text-6xl text-black font-bold
         text-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">Uncovering art at your fingertips.
                 <br className="max-md:hidden" /> </Link> */}
 
    <button type="button" className=" absolute top-1/8 left-1/2 -translate-x-1/2 -translate-y-1/2 amber_btn">
            Explore the gallery
            </button>
   
    </div>
    <div className='w-full flex-center flex-col'>
<p className="desc text-center tracking-wide text-slate-500">
</p>
</div>
<div className='w-full'>
        
        </div>
    
      </section>
    
      </>


  )
}

export default Home