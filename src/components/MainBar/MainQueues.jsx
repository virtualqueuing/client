import styled from "styled-components";
import SingleQueue from "../SingleQueue";

const QueueSection = styled.div`
  height: 60vh;
  width: 100%;
  overflow: auto;
`;

const queues = [
  {
    _id: 1,
    name: "Jason",
    phoneNumber: "0481005235",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 2,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 3,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 4,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 5,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 6,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 7,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 8,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 9,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
  {
    _id: 10,
    name: "Mark",
    phoneNumber: "0415826553",
    location: "Sunnybank",
    queueNumber: 144,
    guest: 6,
    table: "large",
    type: "lunch",
    state: "Waiting",
  },
];

const MainQueues = () => {
  return (
    <QueueSection>
      {queues.map((queue) => (
        <SingleQueue key={queue._id} {...queue} />
      ))}
    </QueueSection>
  );
};

export default MainQueues;
