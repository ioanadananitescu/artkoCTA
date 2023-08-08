'use client'

import Card from "./Card";
import Image from "next/image";

const ArtistCard = ({ name, desc, data, userImage}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
      <Image
              src={userImage}
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
            /> 
        <span className='blue_gradient'>{name}</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <Card 
            key={post._id}
            post={post}
          
          />
        ))}
      </div>
    </section>
  );
};

export default ArtistCard;