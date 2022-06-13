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

  & > img {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease-in-out;
    padding-right: 10px;

    :hover {
      cursor: pointer;
      transform: scale(1.25);
    }
  }
`;
