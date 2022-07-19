import AddNewButton from "../../../components/AddNew/AddNewButton";
import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { showNewFormContext } from "../../../pages/Context";
import { ThemeProvider } from "styled-components";
import theme from "../../../../src/theme";

describe("<AddNewButton>", () => {
  it("should display submit and cancel buttons", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <showNewFormContext.Provider value={{ setShowAddNewForm: true }}>
          <AddNewButton />
        </showNewFormContext.Provider>
      </ThemeProvider>
    );

    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should set AddNewForm not visible", () => {
    const setShowAddNewForm = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <showNewFormContext.Provider value={{ setShowAddNewForm }}>
          <AddNewButton />
        </showNewFormContext.Provider>
      </ThemeProvider>
    );

    act(() => {
      fireEvent.click(getByText("Cancel"));
    });

    expect(setShowAddNewForm).toHaveBeenCalledWith(false);
  });
});
