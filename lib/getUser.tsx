import React from 'react'

const getUser = async (userId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{next:{revalidate:60}})

    if(!res.ok){
        return undefined
    }
  return  res.json()
}

export default getUser
