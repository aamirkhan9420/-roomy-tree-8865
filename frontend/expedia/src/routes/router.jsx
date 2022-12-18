import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/Account/Account'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import PaymentPage from '../pages/payment'
import Productpage from '../pages/product/Productpage'
import SinglePage from '../pages/SingleHotel'
import AdminLogin from "../components/Admin/Login"
import Register from '../components/Admin/Register'
import Dash from '../components/Admin/Dash'
import Error from '../components/Admin/Error'



export default function Router() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/hotel' element={<Productpage/>}/>
          <Route path='/hotel/:HotelID' element={<SinglePage/>} />
          <Route path='/hotel/:HotelID/payment' element={<PaymentPage/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/Account' element={<Account />}/>

       
          <Route path="/admin" element={<AdminLogin/>} />
              <Route path="/admin/register" element={<Register />} />
              <Route path="/admin/dashboard" element={<Dash />} />
              <Route path="*" element={<Error />} />

        </Routes>
    </div>
  )
}
