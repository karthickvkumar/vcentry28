import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (configuration) => {
        // const token = localStorage.getItem('token');
        const token = "QpwL5tke4Pnpja7X4";
        configuration.headers.Authorization = "Bearer " + token;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;