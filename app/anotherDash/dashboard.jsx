"use client";

import "../../app/dashboard/data-tables-css.css";
import "../../styles/globals.css";
import { lusitana } from "../ui/fonts/fonts";

import { useState } from "react";


import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";


export default function AnotherDash({session}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="flex h-screen flex-row overflow-hidden">
    <div className="w-full flex-none">
           
    
    
   
        <div className="dark:bg-boxdark-2 dark:text-bodydark" >
      
        <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
             
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
            <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            session={session}/>
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
               
                
             
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
            </div>
            </div></div>
        
   
       

  );
}