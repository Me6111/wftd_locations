// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\apps\portal\portal.js



import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import Locations from '../../apps/Locations/Locations';


const Portal = () => {
  return (
    <>
      <BackgroundContainer />

      <div className='main-menu-uber-container'>
        <div className="main-menu-container">
          <div className="main-menu-container-title">
            <h1 className="main-menu-title">WORLD FREIGHT TRANSPORT DEPARTMENT</h1>
          </div>
          <div className="main-menu-container-content">
            <Link className="main-menu-option" to="/Locations">Locations</Link>
          </div>
        </div>
      </div>

      

      <Routes>
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </>
  );
};

export default Portal;
