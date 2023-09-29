import '@styles/globals.css';
import '@styles/auth-form.css';
import Nav from'@components/Nav';
import Provider from '@components/Provider';
import Navbar from '@components/NavBar';
import  Footer  from '@components/Footer';



export const metadata={
    title:"Artko",
    description:'an online platform showcasing artists work'
}

const RootLayout = ({children}) => {

  
  return (
    
  <html>
   
 
      <body>
				
      <Provider>
    
        <div className="main ">
            {/* <div className="gradient"/> */}
        </div>
        <main className="app">
            <Nav />           
            {children}
            <Footer/>
          </main>
         
          </Provider>
       
    </body>
  </html>
  )
}

export default RootLayout