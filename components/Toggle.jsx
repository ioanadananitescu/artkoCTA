"use client"
import React, {useState} from 'react';

import { useRouter } from 'next/navigation';

const Toggle = () => {

    const [showMe, setShowMe] = useState(true);

  function toggle(){
    setShowMe(!showMe);
  }

  const [move, setMove] = useState(true);

  const toggleClass = ' transform translate-x-6';

 
const router=useRouter();

  return (
    <>

    <div
      className="mb-5 md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={() => {
        setMove(!move);
        toggle()
      }}
    >

   {/* Switch */}
      <div
        className =  {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" 
        +  (move ? null : toggleClass)}
      >
       
</div>

</div>
      {/* <button onClick={toggle}>Toggle Subjects</button> */}
      {/*The bottom code should toggle on and off when the button is pressed*/}
       <div style={{
        display: showMe?
        (router.push('/')):(router.push('/'))
       
      }}>
            
      </div> 
    </>
  );
  
}

export default Toggle