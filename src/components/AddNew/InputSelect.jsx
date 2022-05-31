import {
  StyledInputSelectFlex,
  CustomStyledInputSelectImage,
  CustomStyledInputSelectBg,
} from "../styles/AddNew.styles";
import { useState } from "react";

const number = [];
for (let i = 1; i <= 12; i++) {
  number.push({ children: i });
}

const tableType = [
  {
    value: "small",
    children: "Small",
  },
  {
    value: "medium",
    children: "Medium",
  },
  {
    value: "large",
    children: "Large",
  },
];

const InputSelect = () => {
  const [select, setSelect] = useState("")
  console.log(select)

  return (
    <StyledInputSelectFlex>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="people" >
          <option value="" disabled selected hidden>
            People
          </option>
          {number.map(({ value, children }) => (
            <option setSelect={setSelect}
              onChange={e=>setSelect(e.target.value)}
              key={value}>
              {children} 
            </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="tableType" >
          <option value="title" disabled selected hidden>
            Table Type
          </option>
          {tableType.map(({ value, children }) => (
            <option 
              setSelect={setSelect}
              onChange={e=>setSelect(e.target.value)}
              key={value}>
              {children} 
            </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
    </StyledInputSelectFlex>
  );
};

export default InputSelect;
