import styled from "styled-components";

const SeparateLine = styled.div`
  width: ${({ width }) => width || "95%"};
  border: 1px solid ${({ color }) => color || "#000"};
  border-radius: 20%;
  margin: 0 1%;
`;

export default SeparateLine;
