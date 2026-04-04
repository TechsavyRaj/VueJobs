import axios from "axios";
import { authState } from "@/state/auth";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(config => {
    if (authState.token) {
        config.headers.Authorization = `Bearer ${authState.token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;