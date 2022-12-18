import React from 'react'
// import Login from "./Login";
import Register from "./Register";
import Dash from './Dash';
import Error from "./Error";

import { Routes, Route } from "react-router-dom"

const AllRoute = () => {
  return (
    <>
          <Routes>
            
              {/* <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dash />} />
              <Route path="*" element={<Error />} /> */}
            </Routes>
    </>
  )
}

export default AllRoute