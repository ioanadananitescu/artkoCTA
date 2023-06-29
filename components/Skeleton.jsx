'use client'
import React from 'react';
import PaintingsSkeletonCard from './PaintingsSkeletonCard';

const Skeleton = () => {
        //to mimics the loading, initialize an array of length 13 and fill it with 0's
        let skeletonCards = Array(4).fill(0);
  return (
    <div className="flex flex-wrap md:flex-row sm:flex-columns">
        {skeletonCards.map((index)=>(
 <PaintingsSkeletonCard key={index}/>
        ))}
     
    </div>
  )
}

export default Skeleton
