import {
  StyledInputSelectFlex,
  CustomStyledInputSelectImage,
  CustomStyledInputSelectBg,
} from "../styles/AddNew.styles";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
  return (
    <StyledInputSelectFlex>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="guestsNumber">
          <option value="" disabled selected hidden>
            People
          </option>
          {numbers.map((number) => (
            <option key={number}> {number} </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="tableSize">
          <option value="title" disabled selected hidden>
            Table Type
          </option>
          {tableType.map(({ value, children }) => (
            <option key={value}> {children} </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
    </StyledInputSelectFlex>
  );
};

export default InputSelect;
