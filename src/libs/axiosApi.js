import axios from "axios";
import { API_URI } from "../constant";

const AxiosApi = axios.create({
  baseURL: `${API_URI}`,
});

// {
//     get: (url, config)=>{console.log(url);console.log(config)}
// }

export const axiosGet = (url, config) => AxiosApi.get(url, config);

export default AxiosApi;
