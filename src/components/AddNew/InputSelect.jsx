import {
  StyledInputSelectFlex,
  CustomStyledInputSelectImage,
  CustomStyledInputSelectBg,
} from "../styles/AddNew.styles";
import React, { useState } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const InputSelect = () => {
  const [guestNum, setGuestNum] = useState();
  function getTableType(guests) {
    const tableType = {
      "1": "Small",
      "2": "Small",
      "3": "Small",
      "4": "Small",
      "5": "Medium",
      "6": "Medium",
      "7": "Medium",
      "8": "Medium",
      "9": "Large",
      "10": "Large",
      "11": "Large",
      "12": "Large",
    }
    return tableType[guests];
  }
  return (
    <StyledInputSelectFlex>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="guestsNumber" value={guestNum} onChange={e=>setGuestNum(e.target.value)}>
          <option disabled selected hidden>
            People
          </option>
          {numbers.map((number) => (
            <option key={number}> {number} </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
      <CustomStyledInputSelectBg name="tableSize">
        <option value="title" disabled selected hidden>
          {getTableType(guestNum)}
        </option>
      </CustomStyledInputSelectBg>
    </StyledInputSelectFlex>
  );
};

export default InputSelect;
