import styled from "styled-components";
import theme from "../theme";

const QueueItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const QueueData = styled.div`
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

const SeperateLine = styled.div`
  width: 98%;
  border: 1px solid #c4c4c4;
  border-radius: 20%;
  margin: 0 1%;
`;

const SingleQueue = () => {
  return (
    <>
      <QueueItem>
        <QueueData color="#000">
          <p>Jason</p>
        </QueueData>
        <QueueData color="#000">
          <p>0481005235</p>
        </QueueData>
        <QueueData color="#000">
          <p>Sunnybank</p>
        </QueueData>
        <QueueData color="#000">
          <p>144</p>
        </QueueData>
        <QueueData color="#000">
          <p>6</p>
        </QueueData>
        <QueueData color="#000">
          <p>Large</p>
        </QueueData>
        <QueueData color="#000">
          <p>Lunch</p>
        </QueueData>
        <QueueData color={theme.colors.statusW}>
          <p>Waiting...</p>
        </QueueData>
      </QueueItem>
      <SeperateLine></SeperateLine>
    </>
  );
};

export default SingleQueue;
