import styled from "styled-components";

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.page["main"]};
  color: #fff;
  border: none;
  & p {
    font-size: ${({ theme }) => theme.fontSizes["lg"]};
    font-weight: 500;
  }
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.components.loginButton["hover"]};
  }
`;
export default SubmitButton;
