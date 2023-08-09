import Link from 'next/link'
import React from 'react'
import Search from './Search'
import MyProfilePic from './MyProfilePic'
const Navbar = () => {
  return (
   <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl z-10'>
    {/* <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href="/">WikiRockets</Link>
    </h1>
    <Search/> */}
    <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
      <Link href="/" className='text-white/90 no-underline hover:text-white'>Himanshu Singh</Link>
      </h1>
     
    </div>

   </nav>
  )
}

export default Navbar
