import InputTextarea from "../../../components/AddNew/InputTextarea";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("<InputTextarea>", () => {
  it("shoule render birthday, wheelchair and highchair button on the page", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <InputTextarea />
      </ThemeProvider>
    );
    screen.debug(container);
  });
});
