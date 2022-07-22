import { render } from "@testing-library/react";
import InputText from "../../../components/AddNew/InputText";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

const inputInfo = { name: "Ting", phoneNumber: "0400123456" };

describe("<InputText>", () => {
  it("should render an empty input text tags if the inputInfo doesn't ruturn any value", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <InputText />
      </ThemeProvider>
    );
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Phone number")).toBeInTheDocument();
  });

  it("should return a value if inputInfo prop has passed a value", () => {
    const { getByDisplayValue } = render(
      <ThemeProvider theme={theme}>
        <InputText inputInfo={inputInfo}></InputText>
      </ThemeProvider>
    );
    expect(getByDisplayValue(inputInfo.name)).toBeInTheDocument();
    expect(getByDisplayValue(inputInfo.phoneNumber)).toBeInTheDocument();
  });
});
