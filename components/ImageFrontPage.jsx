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
const file="v1687430481/frontpage/bioartexpo.jpg";
    const myImage=cld.image(file);


  return (
    <div >
          <AdvancedImage
            cldImg={myImage}
            plugins={[lazyload ('0', 1),responsive(200),placeholder ({mode: 'predominant-color'})]}
            
          />
        </div>
  )
}

export default ImageFrontPage
