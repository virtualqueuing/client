import styled, { css } from "styled-components";

export const QueueDataContainer = styled.div`
  padding: 0;
  width: 100%;
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
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: calc(100% / 9);
  display: flex;
  justify-content: center;
  gap: 10%;
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

export const QueueDataNumber = styled(QueueData)`
  width: 50px;
  margin-left: 35px;
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
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  & img {
    width: 26px;
    height: 26px;
  }
`;

export const NoteButton = styled.button`
  width: 20px;
  border-radius: 50%;
  background-color: none;
  background-image: none;
  background: none;
  border: #ffe353 2px solid;
  position: absolute;
  color: #ffe353;
  height: 20px;
`;
