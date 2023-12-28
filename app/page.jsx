
import Header from "../components/legacy/Header";

import "../styles/globals.css"
import MasonryGallery from './ui/components/MasonryGallery';
import Navbar from "./ui/components/NavBar";
import Navedit from "./ui/components/NavEdit";




 export default async function Home(){


  return (
    <> 
    <div className='relative z-10 flex items-center flex-col max-w-7xl mx-auto sm:px-16 px-6;'>  
    <Navedit/>
      <Navbar/> 
      <Header />
   <MasonryGallery/>
</div>
  </>
  )
 }