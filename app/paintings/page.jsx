'use client';

import React, {useState, useEffect} from 'react';
import { commerce } from '@lib/commerce';
import Navbar from '@components/NavBar';
import PaintingsSkeletonCard from '@components/PaintingsSkeletonCard';
import Skeleton from '@components/Skeleton';
import NavBarSecondary from '@components/NavBarSecondary';



const Paintings = () => {

    
const [products, setProducts]=useState([]);
const [cart, setCart] = useState({});
// const [featured, setFeatured] = useState([]);

   //loading with skeleton

   const [loading, setLoading] = useState(true);
       //implement a timer to see the loading skeleton
/*    useEffect(() => {
      if (products) {
        setTimeout(() => {
          setLoading(false);
        }, 30000);
      }
    }, [products]);  */



const fetchProducts = async ()=>{
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
}






const fetchCart = async ()=>{
    
    setCart(await commerce.cart.retrieve());
}

const handleAddToCart= async (productId, quantity)=>{
   
    const item= await commerce.cart.add(productId, quantity);
   setCart(item);
}

const handleUpdateCartQty =async (productId, quantity) => {
    
    const item = await commerce.cart.update(productId, { quantity })
    
    setCart(item)
    
  
  }

    const handleRemoveFromCart = async (lineItemId) => {
        const item=await commerce.cart.remove(lineItemId);
        setCart(item);
    }

    const handleEmptyCart=async()=>{
        const item=await commerce.cart.empty();
        setCart(item);
    }
 


useEffect(()=>{
    fetchProducts();
    fetchCart();
    
   
   
},[])

    console.log(products);

 


  
    
  
    return (
        <>
            <Navbar/>
            <NavBarSecondary/>
            
      


{loading ? 
(<Skeleton/>)
:
(
<div className="gap-8 xs:columns-1 md:columns-3 sm:columns-2 "  > 
    {products.map((product) => (
    <div className="py-3">
    <a href="#">
    <img key={product.key} className="h-auto break-inside max-w-full rounded-lg" src={product.image.url} alt="product image" />
  </a>
  <p className="text-md  tracking-tight text-gray-900 dark:text-white">{product.name}</p>
 <p className="text-sm text-gray-900 dark:text-white">{product.description.replace(/(<([^>]+)>)/gi, "")}</p>
 </div>
 ))}
  </div>
)
 }                 
</>
      
  )
}

export default Paintings