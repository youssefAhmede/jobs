import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // تأكد من أن هذا هو عنوان الخادم الصحيح
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('Token');
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
