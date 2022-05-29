import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  height: 27vh;
  flex-direction: column;
`;

export const Branding = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;
`;

export const PathIdentifier = styled.div`
  position: relative;
  height: 30%;

  & > p {
    position: absolute;
    left: 120px;
    top: 50%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const SeperateLine = styled.div`
  width: 98%;
  border: 1px solid #000;
  border-radius: 20%;
  margin: 0 1%;
`;

export const QueueTitle = styled.div`
  /* position: relative; */
  height: 40%;
  display: flex;
  align-content: center;
  justify-content: center;
`;
