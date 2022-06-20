import {
  InputWrapper,
  CustomerInputSelectBg,
  Label,
  StyledInputSelect,
} from "../styles/AddNew.styles";
import React, { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const InputSelect = (params) => {
  console.log(params.inputInfo);
  const [guestNum, setGuestNum] = useState();
  function getTableType(guests) {
    const tableType = {
      1: "Small",
      2: "Small",
      3: "Small",
      4: "Small",
      5: "Medium",
      6: "Medium",
      7: "Medium",
      8: "Medium",
      9: "Large",
      10: "Large",
      11: "Large",
      12: "Large",
    };
    return tableType[guests];
  }
  return (
    <InputWrapper>
      <CustomerInputSelectBg>
        <Label for="people">People</Label>
        <StyledInputSelect
          id="people"
          name="guestsNumber"
          value={guestNum}
          defaultValue={params?.inputInfo?.guestsNumber ? params.inputInfo.guestsNumber : ""}
          onChange={(e) => setGuestNum(e.target.value)}
        >
          <option selected hidden />
          {numbers.map((number) => (
            <option key={number}> {number} </option>
          ))}
        </StyledInputSelect>
      </CustomerInputSelectBg>
      <div>
        <Label for="Table">Table</Label>
        <StyledInputSelect id="Table" name="tableSize" >
          <option
            selected
            hidden
          >
            {getTableType(guestNum) || params.inputInfo.tableSize}
          </option>
        </StyledInputSelect>
      </div>
    </InputWrapper>
  );
};

export default InputSelect;
