import React from 'react'

const getUserPosts = async (userId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}` , { cache: 'no-store' })

    if(!res.ok){
        return undefined
    }
  return  res.json()
}

export default getUserPosts


// ISR
//SSG , SSR
