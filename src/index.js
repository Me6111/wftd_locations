// C:\Users\user\Desktop\react_wftd\wftd_2\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your store
import './index.css';
import Portal from './apps/portal/portal';
import Locations from './apps/Locations/Locations';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/Locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </Provider>
 </React.StrictMode>
);

reportWebVitals();