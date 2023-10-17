import '@styles/globals.css';
import '@styles/auth-form.css';
import Provider from '@components/Provider';
import Navbar from '@components/NavBar';
import  Footer  from '@components/Footer';
import Navedit from '@components/NavEdit';




export const metadata={
    title:"Artko",
    description:'online art platform showcasing art'
  }

const RootLayout = ({children}) => {

  
  return (
    
  <html>
   
 
      <body>
				
  
        <main className="app">
          <Navedit/>
            <Navbar />
       
            {children}
         
          </main>
          <Footer/>
    
       
    </body>
  </html>
  )
}

export default RootLayout