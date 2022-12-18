import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Productpage from '../pages/product/Productpage'

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Productpage/>}/>
        </Routes>
    </div>
  )
}
