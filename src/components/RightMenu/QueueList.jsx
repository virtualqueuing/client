import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";
import { queues } from "../../assets/dummyData/dummyData";

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
