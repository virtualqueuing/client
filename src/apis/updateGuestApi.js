import AxiosApi from "../libs/axiosApi";

const updateGuestApi = (id, data) => {
  AxiosApi.put(`/v1/queues/${id}`, data);
};

export default updateGuestApi;
