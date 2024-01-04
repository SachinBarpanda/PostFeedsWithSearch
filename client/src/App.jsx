import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Navbar'
import PostList from './components/ListOfPost/PostList'
import Write from './components/Write/Write'
import Login from './components/Login/Login'
import {Route,BrowserRouter,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const user = true;
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={user?<PostList/>: <Login/>}>
        </Route>

        <Route path='/login' element={<Login/>}>
        </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
