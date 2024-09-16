import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between bg-blue-600 px-12 items-center'>
        <h1 className='text-2xl'>Header</h1>
         <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Careers</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header