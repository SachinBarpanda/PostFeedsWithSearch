import React from 'react'

export default function SinglePost({post,key}) {
  console.log(post._id)

  return (
    <div className=''>
        {/* <h3>{post.title}</h3> */}
        {/* <p>{post.desc}</p> */}
        <h5>Username</h5>
        <p>TextBox for comments</p>
        <h5>User who commented</h5>
    </div>
  )
}

