'use client'
import Navbar from '@components/NavBar'
import NavBarSecondary from '@components/NavBarSecondary'

import React, {useState, useEffect} from 'react';
import { commerce } from '@lib/commerce';


import Skeleton from '@components/Skeleton';




const Abstract = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading] = useState(true);
   
    const fetchProducts = async ()=>{
        const { data } = await commerce.products.list({
            category_slug:['abstract','paintings'], 
            sortBy:'price',
        sortOrder:'desc',
    limit:20,
page:1
 });
setProducts(data);
        setLoading(false);
    };


useEffect(()=>{
    fetchProducts();
},[]
);

if(!products) return (
  <>
  <Navbar/>
  <NavBarSecondary/>
  <div>No works match your criteria!</div>
  </>
  )

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

export default Abstract