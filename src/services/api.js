import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://3.23.213.205:3333',
  baseURL: 'http://localhost:3333',
});

export default api;
