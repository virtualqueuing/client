import VirtualQueuing from "../libs/VirtualQueuing";

const updateGuestApi = (id, data) => {
  VirtualQueuing.put(`/v1/queues/${id}`, data);
};

export default updateGuestApi;
