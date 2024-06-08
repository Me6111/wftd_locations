// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './index.css';
import WFTD from './apps/WFTD/WFTD';
import Login from './apps/Login/Login'; // Import Login component
import Deliverium from './apps/Deliverium/Deliverium'; // Import Deliverium component

import reportWebVitals from './reportWebVitals';


/*
This component will be shared a long the all apps
*/
const CustomNav = ({ children }) => {
  return (
    <>
      <h1>Nav Component</h1>
      {children}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <CustomNav>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<WFTD />} /> {/* Set the default route to WFTD */}
              <Route path="/Login" element={<Login />} />
              <Route path="/Deliverium" element={<Deliverium />} />
            </Routes>
        </BrowserRouter>
      </CustomNav>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();











