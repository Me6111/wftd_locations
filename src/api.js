

// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\api.js









// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-railway-backend-url.com', // Replace with your Railway backend URL
  timeout: 10000,
});

export const getHello = async () => {
  try {
    const response = await api.get('/hello');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch hello data:', error);
    throw error;
  }
};

// Add more exported functions for other endpoints