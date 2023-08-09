import React from 'react'
type Props = {
    promise:Promise<Post[]>
}
const UserPosts = async ({promise}:Props) => {
    const posts = await promise;

    const content = posts.map(post => {
        return (
            <article className='bg-green-300 shadow-md m-2 text-center' key={post.id}>
                <h2 className='font-bold text-lg'>{post.title}</h2>
                <p className='text-sm'>{post.body}</p>
                <br/>
            </article>
        )
    })
  return content
}

export default UserPosts
