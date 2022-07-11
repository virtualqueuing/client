import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes["xxs"]};
  padding: 4px 10px;
  margin: 0 10%;
`;

export const ExsitedEmailMessge = styled.div`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.components.negativeButton["fontColor"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
