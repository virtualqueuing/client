import styled, { css } from "styled-components";

export const QueueDataContainer = styled.div`
  /* margin: 6px 0 0 0; */
  /* margin-right: 2%; */
  padding: 0;
  width: 60%;
  margin-left: 1.2%;
  /* margin-right: 2vw; */

  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  align-items: center; 
  height: auto;
  /* margin-top: 25px; */
  /* ${(props) =>
    props.active
      ? css`
          background-color: yellow;
        `
      : "none"} */
`

export const QueueItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  /* margin: 6px 0 0 0; */
  /* margin-right: 2%; */
  /* padding: 0;
  width: 54%;
  margin-left: 0.9vw; */
  /* margin-right: 2vw; */

  /* display: flex;
  flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between;
  align-items: center; 
  height: auto;
  margin-top: 25px;
  cursor: pointer; */
  /* ${(props) =>
    props.active
      ? css`
          background-color: yellow;
        `
      : "none"} */
`;

export const QueueData = styled.div`
  width: calc(100%/6);
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* padding: 3vh; */
  padding: 1vh 1vw;

  & p {
    color: #514c55;
    font-size: 20px;
  }
`;

export const TooltipContainer = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* text-align: center; */
  /* padding: 3vh; */
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
  border: 1px solid #C4C4C4;
  color: #C4C4C4;
  box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  & img {
    width: 26px;
    height: 26px;
  }
`;
