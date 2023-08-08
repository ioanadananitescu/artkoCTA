'use client'
import Link from 'next/link';
import { useState } from 'react';


const NavBarSecondary = () => {
  return (
    <div class="flex items-center justify-center py-4 md:py-8 flex-wrap space-x-2">

<Link href="/paintings/landscapes"><button type="button" class="outline_btn">Landscapes</button></Link>
<Link href="/paintings/flowers"><button type="button" class="outline_btn">Flowers</button></Link>
<Link href="/paintings/portraits"><button type="button" class="outline_btn">Portraits</button></Link>
<Link href="/paintings/abstract"><button type="button" class="outline_btn">Abstract</button></Link>
    </div>
  )
}

export default NavBarSecondary
