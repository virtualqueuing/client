import AxiosApi from "../libs/axiosApi";

const addGuestApi = (data) => {
  const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
  AxiosApi.post("/v1/queues", data, { headers: { Authorization: BEARER_TOKEN } });
};

export default addGuestApi;
