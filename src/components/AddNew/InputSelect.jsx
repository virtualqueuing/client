import {
  StyledInputSelectFlex,
  CustomStyledInputSelectImage,
  CustomStyledInputSelectBg,
} from "../styles/AddNew.styles";

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
  return (
    <StyledInputSelectFlex>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="people">
          <option value="" disabled selected hidden>
            People
          </option>
          {number.map(({ value, children }) => (
            <option key={value}> {children} </option>
          ))}
        </CustomStyledInputSelectBg>
      </CustomStyledInputSelectImage>
      <CustomStyledInputSelectImage>
        <CustomStyledInputSelectBg name="tableType">
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
