import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const user = true;
  return (
    <div className='flex justify-center p-4 sticky top-0 bg-cyan-500'>

        <div className='flex-1'>
            <div className='flex-1 fa-solid fa-magnifying-glass'></div>
            Search
        </div>
        <div className='flex-1 '>
            <div className='border-2  w-fit p-2 px-4 bg-blue-950 text-white'>Add Post</div></div>
        <div className='flex-0'>{
          
            user ? (<div>username</div> ) : (
              <Link>Login</Link>
            )
          

        }</div>
    </div>
  )
}

export default Navbar