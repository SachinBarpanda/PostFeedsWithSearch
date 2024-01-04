import React from 'react'

function Write() {
  return (
    <div>
        <form action="">
            <div className=''>
                <label htmlFor="userMsg">Your Message</label>
                <input type="text" id='userMsg' className=' border outline-4 border-black mx-2'/>
            </div>
            <button className=' border border-black px-4 '>Post</button>
        </form>
    </div>
  )
}

export default Write