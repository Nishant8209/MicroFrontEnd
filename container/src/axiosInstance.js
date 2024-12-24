// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
   console.log('this is the interceptors ');
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized - Redirecting to login...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
