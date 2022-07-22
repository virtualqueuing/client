// import LoginPage from "../../pages/LoginPage";
// import { render, screen } from "@testing-library/react";
// import AxiosApi, { axiosGet } from "../../libs/axiosApi";

// AxiosApi.get = jest.fn();

// jest.mock("../../constant", () => ({
//   API_URI: "test",
//   default: "test",
// }));

// describe("<LoginPage>", () => {
//   it("should display Sign in and descriptions on header", () => {
// const { container } = render(<LoginPage />);
// screen.debug(container);
// });

// expect(getByText("Sign in")).toBeInTheDocument();
// expect(getByText("Enter your details to sign in to your account")).toBeInTheDocument();
// expect(getByText("Having trouble in sign in?")).toBeInTheDocument();
// expect(getByText("Sign up")).toBeInTheDocument();
// expect(getByText("Sign in")).toBeInTheDocument();

// describe("<Logo>", () => {
//   it("should displays logo image on footer", () => {
//     const { queryByTestId } = render(<Logo />);
//     expect(queryByTestId("logo").props.source).toBe(logo);
//   });
// });
// });
