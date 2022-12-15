import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'




export default function Router() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Login />}/>

          

          
        </Routes>
    </div>
  )
}
