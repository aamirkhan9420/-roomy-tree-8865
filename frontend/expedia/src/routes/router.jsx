import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import PaymentPage from '../pages/payment'
import Productpage from '../pages/product/Productpage'
import SinglePage from '../pages/SingleHotel'

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hotel' element={<Productpage/>}/>
          <Route path='/hotel/:HotelID' element={<SinglePage/>} />
          <Route path='/hotel/:HotelID/payment' element={<PaymentPage/>}/>
        </Routes>
    </div>
  )
}
