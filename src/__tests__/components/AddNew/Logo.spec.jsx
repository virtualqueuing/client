import Logo from "../../../components/Logo";
import React from "react";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => (
    <div className="link" data-to={to}>
      {children}
    </div>
  ),
}));

describe("<Logo>", () => {
  it("should present on the top of the queue list page", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
  it("should present large on the top of the queue list page", () => {
    const { container } = render(<Logo logoSize="large" />);
    expect(container).toMatchSnapshot();
  });
  it("should present medium on the top of the queue list page", () => {
    const { container } = render(<Logo logoSize="medium" />);
    expect(container).toMatchSnapshot();
  });
  it("should present small on the top of the queue list page", () => {
    const { container } = render(<Logo logoSize="small" />);
    expect(container).toMatchSnapshot();
  });
});
