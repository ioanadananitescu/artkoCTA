"use client"

import React from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, responsive, placeholder } from "@cloudinary/react";




const ImageFrontPage = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: "dlel1msov"
        }
      });
const file="v1687341642/frontpage/Skinsetup.jpg";
    const myImage=cld.image(file);
    myImage
   
    .format('auto')
    .quality('auto');


    const myUrl=myImage.toURL();
    console.log(myUrl);


  return (
    <div >
          <AdvancedImage
          
            cldImg={myImage}
            plugins={[lazyload({rootMargin: '10px 20px 10px 30px', threshold: 0.25}),responsive({steps:[800, 1000, 1400]}),placeholder ({mode: 'predominant-color'})]}
            
          />
        </div>
  )
}

export default ImageFrontPage
