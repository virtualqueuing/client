import {
  InputWrapper,
  CustomerInputSelectBg,
  Label,
  StyledInputSelect,
} from "../styles/AddNew.styles";
import React, { useState } from "react";
import { OPTION_NUMBERS } from "../../constant";

const InputSelect = () => {
  const [guestNum, setGuestNum] = useState();
  const getTableType = (guestNum) => {
    if (guestNum >= 1 && guestNum <= 4) {
      return "Small";
    } else if (guestNum >= 5 && guestNum <= 8) {
      return "Medium";
    } else if (guestNum >= 9 && guestNum <= 12) {
      return "Large";
    }
  }
  return (
    <InputWrapper>
      <CustomerInputSelectBg>
        <Label for="people">People</Label>
        <StyledInputSelect
          id="people"
          name="guestsNumber"
          value={guestNum}
          onChange={(e) => setGuestNum(e.target.value)}
        >
          <option selected hidden />
          {OPTION_NUMBERS.map((number) => (
            <option key={number}> {number} </option>
          ))}
        </StyledInputSelect>
      </CustomerInputSelectBg>
      <div>
        <Label for="Table">Table</Label>
        <StyledInputSelect id="Table" name="tableSize">
          <option value={getTableType(guestNum)} selected hidden>
            {getTableType(guestNum)}
          </option>
        </StyledInputSelect>
      </div>
    </InputWrapper>
  );
};

export default InputSelect;
