import styled, { css } from "styled-components";

export const QueueItem = styled.div`
  /* margin: 6px 0 0 0; */
  /* margin-right: 2%; */
  padding: 0;
  width: 54%;
  margin-left: 0.9vw;
  /* margin-right: 2vw; */

  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  align-items: center; 
  height: auto;
  margin-top: 25px;
  cursor: pointer;
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
