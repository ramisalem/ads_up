import axios, { AxiosInstance } from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1";
// process.env.NODE_ENV === "production"
//   ? process.env.NEXT_PUBLIC_PROD_BASE_URL
//   : process.env.NEXT_PUBLIC_DEV_BASE_URL;

// axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );

const api = axios.create({
    baseURL: API_URL,
});

export default api;
