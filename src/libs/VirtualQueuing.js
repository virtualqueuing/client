import axios from "axios";
import { API_URI } from "../constant";

const VirtualQueuing = axios.create({
    baseURL: `${API_URI}`,
})

export default VirtualQueuing