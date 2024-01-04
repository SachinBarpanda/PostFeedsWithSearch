import React, { useEffect, useState } from 'react'
import SinglePost from '../Singlepost/SinglePost'
import axios from 'axios'

function PostList() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    
    const fetchPosts = async ()=>{
      const res = await axios.get("http://localhost:5000/api/post")
      setPosts(res.data)
    }
    fetchPosts(); 

  },[])

  const newObj = {
    title : "New Title "
  }

  return (
    <div className='flex items-center flex-col gap-4'>
        {posts.map((item)=>
        
          <SinglePost post={item} key={item.id} />
        )}
        <SinglePost/>

        
    </div>
  )
}

export default PostList