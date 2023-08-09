import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata :Metadata = {
  title:"About Page",
  description:"This is about section of this page"
}

const About = (props:any) => {
    // throw new Error("Not today")
 
   

  return (
    <div>
        <>
        <h1>{props.name}</h1>
        <Link className='bg-green-200 p-1 shadow-inner' href="/">Link to home page </Link>
        </>
    </div>
  )
}

export default About
