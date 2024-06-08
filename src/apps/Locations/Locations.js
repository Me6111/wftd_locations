

// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\apps\Locations\Locations.js


import React from 'react';
import './Locations.css'; 

import MainMenuButton from '../../components/MainMenuButton/MainMenuButton';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer'; 

const Locations = () => {
  return (
    <>
      <MainMenuButton/>
      <BackgroundContainer/>

      <div className="Locations-app-container">
        <div className="Locations-app-container-title">
          <h1 className="Locations-app-title">WORLD FREIGHT TRANSPORT DEPARTMENT</h1>
        </div>

        <div className="Locations-app-container-content">

        </div>
      </div>
    </>
  );
};

export default Locations;
