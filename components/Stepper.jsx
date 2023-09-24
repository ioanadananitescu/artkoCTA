"use client"
import React, { useState } from "react";
import "../styles/stepper.css";
import { TiTick, TiTickOutline} from "react-icons/ti";
import {useRouter} from 'next/navigation';


const Stepper = () => {
  const steps = ["Buy",  "Sell", "Scroll"];
  const pages=["paintings", "artist-sell", ""]
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const handleClick=(value)=>{
    router.push(`/${value}`);
  }
  const router=useRouter();
  return (
    <>
      <div className="md:flex justify-between ">
      
           
        {steps?.map((step, i) => (
        
     
          <div
          key={i}
            className="relative h-40 flex flex-col justify-center items-center w-100 md:w-52  md:border-s-2  border-gray-400"
            onClick={()=>{handleClick(pages[i])
                
            }}
          >
            
             
            <div className="w-10 h-10 flex items-center justify-center z-10 relative bg-slate-500 dark:bg-gray-300 dark:hover:bg-sky-300 hover:bg-sky-600 cursor-pointer rounded-full font-semibold text-white">
            
               <TiTick size={14} /> 
              
              
            </div>
           <p className="text-gray-500">{step}</p>
           
          </div>
        ))}
      </div>
     
    
    </>
  );
};

export default Stepper;
