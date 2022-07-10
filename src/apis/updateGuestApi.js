import AxiosApi from "../libs/axiosApi";

const updateGuestApi = (id, data) => {
  const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
  AxiosApi.put(`/v1/queues/${id}`, data, { headers: { Authorization: BEARER_TOKEN } });
};

export default updateGuestApi;
