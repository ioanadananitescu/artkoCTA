'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-screen z-20">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <Link href="/" className="flex px-10 gap-2 flex-left">
        <Image 
        width={50}
        height={70}
        alt="Artko online art platform. Our logo"
        src="/assets/images/logoArtko5.svg"
        className="object-contain" />
    </Link> 
               {/*   <div className="hidden lg:block translate-y-16">
      
      


//Desktop navigation - hidden- mobile first and only website navigation

<nav className="flex sm:justify-end px-20">
  {[
    ['Gallery', '/paintings'],
    ['Featured', '/featured'],
    ['Pricing', '/pricing'],
    ['Blog', '/blog'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 
    text-slate-700 font-medium 
    hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav> 
          </div>*/}
          <div className="flex px-4 translate-y-2.5 translate-x-1/2">
            <button
              className=" inline-flex items-center 
              justify-center p-2 rounded-md text-gray-400 
              hover:text-white hover:bg-marron-clarisimo 
              focus:outline-none border-none focus:ring-offset-gray-800 
              focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
      
     
      {isMenuOpen && (
        <div className="bg-misty-blue/70">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-40">
          {[
    ['Shop', '/paintings'],
    ['Best selling', '/featured'],
    ['Sell with us', '/artist-sell'],
    ['Contact', '/artist-sell'],
  ].map(([title, url]) => (
    <a href={url} className="text-ivory 
    hover:bg-marron-muyclaro/60 
    hover:text-white block px-3 py-2 rounded-md text-base 
    font-medium">{title}</a>
  ))}
          
 
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
