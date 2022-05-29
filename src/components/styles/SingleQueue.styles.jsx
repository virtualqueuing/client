import styled from "styled-components";

export const QueueItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 6px;
`;

export const QueueData = styled.div`
  width: calc(100% / 8);
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    color: ${({ color }) => color};
    font-size: ${({ theme }) => theme.fontSizes["2x"]};
    font-family: "Inter";
    font-weight: 500;
  }
`;
