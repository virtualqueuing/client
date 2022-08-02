import AxiosApi from "../libs/axiosApi";

const updateUserApi = async (id, currentData) => {
  const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
  const { data } = await AxiosApi.put(`/v1/user/${id}`, currentData, {
    headers: { Authorization: BEARER_TOKEN },
  });

  return data;
};

export default updateUserApi;
