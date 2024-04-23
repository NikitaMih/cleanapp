import axios from 'axios';
import { baseUrl } from 'src/api/url';

const api = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    config.headers.Authorization = `${accessToken}`;
  }
  return config;
});

export default api;
