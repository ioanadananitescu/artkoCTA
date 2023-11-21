
import Header from "../components/Header";

import "../styles/globals.css"
import MasonryGallery from '../components/MasonryGallery';
import Navbar from "../components/NavBar";
import Navedit from "../components/NavEdit";




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