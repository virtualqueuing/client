import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";

const MainQueues = ({queues, type}) => {
  let showList = [];
  if (type === "All") {
    showList = queues
  } else if (type === "Queuing") {
    showList = queues.filter((queue) => queue.state === "Waiting")
  } else if (type === "Completed") {
    showList = queues.filter((queue) => queue.state === "Completed")
  } else if (type === "Absent") {
    showList = queues.filter((queue) => queue.state === "Absent")
  }
  return (
    <QueueSection>
      {showList.map((queue) => (
        <SingleQueue key={queue._id} {...queue} />
      ))}
    </QueueSection>
  );
};

export default MainQueues;
