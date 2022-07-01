import VirtualQueuing from "../libs/VirtualQueuing";

const addGuestApi = (data) => {
  VirtualQueuing.post("/v1/queues", data);
};

export default addGuestApi;
