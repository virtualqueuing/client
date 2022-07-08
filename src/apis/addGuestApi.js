import AxiosApi from "../libs/axiosApi";
import { BEARER_TOKEN } from "../constant";

const addGuestApi = (data) => {
  AxiosApi.post("/v1/queues", data, {headers: {Authorization: BEARER_TOKEN}});
};

export default addGuestApi;
