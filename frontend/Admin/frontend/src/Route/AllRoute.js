import React from 'react'
import Login from "../components/Admin/Login";
import Register from "../components/Admin/Register";
import Dash from '../components/Admin/Dash';
import Error from "../components/Admin/Error";

import { Routes, Route } from "react-router-dom"

// import Dash from "./components/Admin/Dash"

const AllRoute = () => {
  return (
    <>
          <Routes>
            
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dash />} />
              <Route path="*" element={<Error />} />
            </Routes>
    </>
  )
}

export default AllRoute

