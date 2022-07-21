import LoginPage from "../../pages/LoginPage";
import { getByText, render } from "@testing-library/react";
import AxiosApi, { axiosGet } from "../../libs/axiosApi";
import Logo from "../../components/Logo";
import logo from "../../assets/Logo-v5.svg";

AxiosApi.get = jest.fn();

jest.mock("../../constant", () => ({
  API_URI: "test",
  default: "test",
}));

describe("<LoginPage>", () => {
  it("should display Sign in and descriptions on header", () => {
    const { getByText } = render(<LoginPage />);
  });

  expect(getByText("Sign in")).toBeInTheDocument();
  expect(getByText("Enter your details to sign in to your account")).toBeInTheDocument();
  expect(getByText("Having trouble in sign in?")).toBeInTheDocument();
  expect(getByText("Sign up")).toBeInTheDocument();
  expect(getByText("Sign in")).toBeInTheDocument();

  describe("<Logo>", () => {
    it("should displays logo image on footer", () => {
      const { queryByTestId } = render(<Logo />);
      expect(queryByTestId("logo").props.source).toBe(logo);
    });
  });
});
