import axiosApi from "../libs/VirtualQueuing";

const addGuestApi = (data) => {
  axiosApi.post("/v1/queues", data);
};

export default addGuestApi;
