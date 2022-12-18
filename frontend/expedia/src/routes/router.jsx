import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Account from '../components/Account/Account'
import Aboutus from '../components/Footer/Aboutus'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'






export default function Router() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/Account' element={<Account />}/>
          <Route path='/aboutus' element={<Aboutus />}/>

          
        </Routes>
    </div>
  )
}
