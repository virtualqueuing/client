import AxiosApi from "../libs/axiosApi";

const addGuestApi = (data) => {
  AxiosApi.post("/v1/queues", data);
};

export default addGuestApi;
