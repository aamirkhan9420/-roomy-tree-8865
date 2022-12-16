import React from 'react'
import Login from "./Login";
import Register from "./Register";
import Dash from './Dash';
import Error from "./Error";

import { Routes, Route } from "react-router-dom"

const AllRoute = () => {
  return (
    <>
          <Routes>
            
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/register" element={<Register />} />
              <Route path="/admin/dashboard" element={<Dash />} />
              <Route path="*" element={<Error />} />
            </Routes>
    </>
  )
}

export default AllRoute