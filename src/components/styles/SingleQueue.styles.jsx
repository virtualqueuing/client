import styled, { css } from "styled-components";

export const QueueDataContainer = styled.div`
  padding: 0;
  width: 60%;
  /* margin-left: 2%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const QueueItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 25px; */
  padding: 20px 0;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          background-color: ${({ theme }) => theme.colors.page.secondary};
          border-radius: 15px;
        `
      : " "}
  @media (max-width: 1500px) {
    padding: 10px 0;
  }
`;

export const QueueData = styled.div`
  width: calc(100% / 6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw;

  & p {
    color: ${({ theme }) => theme.colors.fonts.main};
    font-size: 20px;
  }
  @media (max-width: 1500px) {
    & p {
      font-size: 1rem;
    }
  }
`;

export const TooltipContainer = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-around;
  gap: 38%;
  align-items: center;
  padding: 1vh 0.8vw;
  margin-right: 3%;
`;

export const StatusButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1500px) {
    width: 18%;
  }
`;

export const StatusButton = styled.button`
  cursor: pointer;
  width: 94px;
  height: 33px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border: 2px solid ${({ borderColor }) => borderColor};
  color: ${({ fontColor }) => fontColor};
  box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  & img {
    width: 26px;
    height: 26px;
  }
`;
