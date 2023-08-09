import React from 'react'
import Image from 'next/image'
import pic from '.././favicon.ico'
type Props = {}

const MyProfilePic = (props: Props) => {
  return (
    <section className="w-full mx-auto">
        <Image 
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src={pic}
        alt='profile picture'
        width={200}
        height={200}
        priority={true}
        />
    </section>
  )
}

export default MyProfilePic