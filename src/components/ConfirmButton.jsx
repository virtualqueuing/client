import styled from "styled-components";

const ConfirmButton = styled.button`
  border-radius: 50px;
  width: ${({ width }) => width || "130px"};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  margin: 30px 0;
  padding: 15px 15px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default ConfirmButton;
