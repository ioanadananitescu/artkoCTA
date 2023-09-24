"use client"

import React from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, responsive, placeholder } from "@cloudinary/react";
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';




const ImageFrontPage = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: "dlel1msov"
        }
      });
const file="v1687341642/frontpage/Skinsetup.jpg";
    const myImage=cld.image(file);
    myImage
    .resize(thumbnail()
    .width(300)
    .height(300)
    )
   
    .format('auto')
    .quality('auto');


    const myUrl=myImage.toURL();
    console.log(myUrl);


  return (
    <div >
          <AdvancedImage
          
            cldImg={myImage}
            plugins={[responsive({steps:[800, 1000, 1400]}),placeholder ({mode: 'predominant-color'})]}
            
          />
        </div>
  )
}

export default ImageFrontPage
