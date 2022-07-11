import styled from "styled-components";
import ArrowDownIcon from "../../assets/Icons/down-arrow-svgrepo-com.svg";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Option = styled.select`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: ${({ theme }) => theme.colors.fonts["inactiveRoute"]} solid 1px;
  font-size: ${({ theme }) => theme.fontSizes["sd"]};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const CustomedInputOptionBG = styled.div`
  background-image: url(${ArrowDownIcon});
  color: ${({ theme }) => theme.colors.fonts["inactiveRoute"]};
  position: absolute;
  width: 15px;
  height: 15px;
  right: 16%;
  top: 53%;
  z-index: 10;
  pointer-events: none;
`;

const InputOption = ({ value, onChange, children }) => {
  return (
    <Wrapper>
      <Option value={value} onChange={onChange}>
        {children}
      </Option>
      <CustomedInputOptionBG />
    </Wrapper>
  );
};

export default InputOption;
