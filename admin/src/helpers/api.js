import axios from 'axios';


const Api = axios.create({
  baseURL: 'http://localhost:3100',
});

// Add a request interceptor
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } 
    return config;
  },
  (error) => Promise.reject(error)
);


export default Api;