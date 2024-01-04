import React from 'react'

function Login() {
  return (
    <div>
        <form action="">
            <label htmlFor="username">Username</label>
            <input className=' border outline-4 border-black mx-2' type="text" id='username' />
            <label htmlFor="password"></label>
            <input className=' border outline-4 border-black mx-2' type="password" id='password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login