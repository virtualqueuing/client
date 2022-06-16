import styled, { css } from "styled-components";

export const QueueDataContainer = styled.div`
  padding: 0;
  width: 60%;
  margin-left: 1.7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  height: auto;
`

export const QueueItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          background-color: ${({ theme }) => theme.colors.page.secondary}
        `
      : " "}
`;

export const QueueData = styled.div`
  width: calc(100%/6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw;

  & p {
    color: ${({ theme }) => theme.colors.fonts.main};
    font-size: 20px;
  }
`;

export const TooltipContainer = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 0.8vw;
  margin-right: 3%;
`;

export const StatusButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusButton= styled.button`
  cursor: pointer;
  width: 94px;
  height: 33px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  & img {
    width: 26px;
    height: 26px;
  }
`;
