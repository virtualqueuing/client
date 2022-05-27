import styled from "styled-components";

const QueueItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 6px;
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

const SingleQueue = ({ name, phoneNumber, location, queueNumber, guest, table, type, state }) => {
  return (
    <>
      <QueueItem>
        <>
          <QueueData color="#000">{name}</QueueData>
          <QueueData color="#000">{phoneNumber}</QueueData>
          <QueueData color="#000">{location}</QueueData>
          <QueueData color="#000">{queueNumber}</QueueData>
          <QueueData color="#000">{guest}</QueueData>
          <QueueData color="#000">{table}</QueueData>
          <QueueData color="#000">{type}</QueueData>
          <QueueData color="#000">{state}</QueueData>
        </>
      </QueueItem>
      <SeperateLine></SeperateLine>
    </>
  );
};

export default SingleQueue;
