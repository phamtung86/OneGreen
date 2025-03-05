import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://dog.ceo/api`,
    timeout: 0,
    responseType: 'json'
});

axiosClient.interceptors.request.use(async (config) => {
   
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
       
        return response.data;
    }

    return response;
}, (error) => {
 
    throw error;
});

export default axiosClient;

