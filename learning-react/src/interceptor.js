import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (request) => {
        // const token = localStorage.getItem('token');
        const token = "QpwL5tke4Pnpja7X4";
        request.headers.Authorization = "Bearer " + token;
        return request;
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }
)

export default axiosInstance;