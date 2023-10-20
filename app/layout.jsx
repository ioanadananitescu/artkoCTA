import '@styles/globals.css';
import '@styles/auth-form.css';

import Navbar from '@components/NavBar';
import  Footer  from '@components/Footer';
import Navedit from '@components/NavEdit';



export const metadata={
    title:"Artko",
    description:'online art platform showcasing art'
}
  
  

export default async function RootLayout({ children }) {


  
  return (
    
  <html>
   
 
      <body>
				
  
        <main className="app">
   
         <Navedit  />
    
    
            <Navbar />
       
            {children}
         
          </main>
          <Footer/>
    
       
    </body>
  </html>
  )
}

