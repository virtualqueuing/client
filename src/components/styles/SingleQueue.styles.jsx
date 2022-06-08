import styled, { css } from "styled-components";

export const QueueItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin-top: 6px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          background-color: yellow;
        `
      : "none"}
`;

export const QueueData = styled.div`
  width: calc(100% / 6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3vh;
  & p {
    color: ${({ color }) => color};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
  }
`;
