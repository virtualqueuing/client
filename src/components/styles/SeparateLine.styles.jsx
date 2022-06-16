import styled from "styled-components";

const SeparateLine = styled.div`
  border: 1px solid ${({ color }) => color || "#000"};
  margin: 0 2.2%;
`;

export default SeparateLine;
