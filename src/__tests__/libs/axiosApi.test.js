import AxiosApi, { axiosGet } from "../../libs/axiosApi";

AxiosApi.get = jest.fn();

jest.mock("../../constant", () => ({
  API_URI: "test",
  default: "test",
}));

describe("axiosApi", () => {
  it("fetches successfully data from an API", () => {
    expect(AxiosApi.defaults.baseURL).toEqual("test");
  });

  it("gets data with an axios instance", async () => {
    await axiosGet("url", {});

    expect(AxiosApi.get).toHaveBeenCalledTimes(1);
    expect(AxiosApi.get).toHaveBeenCalledWith("url", {});
  });
});
