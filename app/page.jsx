

import Navbar from '@components/NavBar';
import Header from '@components/Header';
import '@styles/globals.css';
import MasonryGallery from '@components/MasonryGallery';
import AuthForm from './auth-form';


 const Home=()=>{
   
  


  return (
    <>   
      <Navbar />  
      <AuthForm/>
      <Header />
      
  <MasonryGallery/>

  </>
  )
 }
 export default Home