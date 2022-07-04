import styled from "styled-components";

export const QueueSection = styled.div`
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 1px;
  }
`;

export const QueueListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  margin: 0 2%;
`;
