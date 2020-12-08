import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_BACKEND_URL,
  // baseURL: 'http://3.23.213.205',
  // baseURL: 'http://localhost:3333',
});

export default api;
