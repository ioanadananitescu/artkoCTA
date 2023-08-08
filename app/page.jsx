
import FeedFirstPage from '@components/FeedFirstPage';
import Navbar from '@components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import FirstPageFeed from '@components/FirstPageFeed';

const Home = () => {
  
  return (
    <>
<Navbar />
   
         
   <section className="">
    <div className="relative">
          <Image
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
                 <br className="max-md:hidden" /> </Link>
 
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
        <FirstPageFeed/>
      </section>
      <Analytics/>
      </>


  )
}

export default Home