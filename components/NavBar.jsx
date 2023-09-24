'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-screen z-20">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        
                  <div className="hidden lg:block translate-y-16">
          {/*   <div className="absolute w-full justify-end flex items-baseline space-x-4">
              <Link href="/paintings"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Paintings
              </Link>
              <Link href="/drawings"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Drawings
              </Link>
              <Link href="/sculpture"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sculpture
              </Link>
            
            </div> */}

<nav className="flex sm:justify-end px-20">
  {[
    ['Gallery', '/paintings'],
    ['Featured', '/featured'],
    ['Pricing', '/pricing'],
    ['Blog', '/blog'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
          </div>
          <div className="flex px-4 translate-y-2.5 lg:hidden">
            <button
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-marron-clarisimo focus:outline-none  focus:ring-offset-gray-800 focus:ring-white"
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
        <div className="lg:hidden bg-misty-blue/70">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-40">
            <Link href="/paintings"className="text-ivory hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Art Gallery
            </Link>
            <Link href="/pricing" className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing
            </Link>
            <Link href="/blog"className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog
            </Link>
 
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
