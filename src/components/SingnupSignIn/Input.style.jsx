import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: ${({ theme }) => theme.colors.fonts["inactiveRoute"]} solid 1px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.fonts["inactiveRoute"]};
    font-size: ${({ theme }) => theme.fontSizes["sd"]};
  }
`;

export default Input;
