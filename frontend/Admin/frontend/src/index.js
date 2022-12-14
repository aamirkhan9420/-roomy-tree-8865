import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/Admin/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';


{/* <ToastContainer
  containerId="an id"
  draggable={false}
  {/* etc... */}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <Context>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </Context>
  

);

