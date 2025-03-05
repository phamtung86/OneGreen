import axiosClient from "../configs/axiosClient";
const url = "/breeds/image/random";

const getImagesByCount = (quantity) => {
    return axiosClient.get(`${url}/${quantity}`);

};

const Api = { getImagesByCount }
export default Api;