import AxiosApi from "../libs/axiosApi";
import { BEARER_TOKEN } from "../constant";

const updateGuestApi = (id, data) => {
  AxiosApi.put(`/v1/queues/${id}`, data, {headers: {Authorization: BEARER_TOKEN}});
};

export default updateGuestApi;
