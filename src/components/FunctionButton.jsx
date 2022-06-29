import styled from "styled-components";

export const FunctionButton = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius || "50px"};
  width: ${({ width }) => width || "130px"};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  margin: 30px 0;
  padding: 20px 50px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const AddGuestButton = styled(FunctionButton)`
   background-color:  ${({ theme }) => theme.colors.page.main};
   color: #fff;
   font-Size:30px;
   font-Weight:500;
   width:250px;
   border-Radius:20px;
   @media (max-width: 1500px) {
    width: 150px;
    border-Radius: 10px;
    padding: 10px;
    font-Size: 20px;
   }
`
