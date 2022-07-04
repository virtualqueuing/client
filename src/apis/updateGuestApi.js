import axiosApi from "../libs/VirtualQueuing";

const updateGuestApi = (id, data) => {
  axiosApi.put(`/v1/queues/${id}`, data);
};

export default updateGuestApi;
