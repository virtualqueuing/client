import axios from "axios";
import { API_URI } from "../constant";

const axiosApi = axios.create({
    baseURL: `${API_URI}`,
})

export default axiosApi