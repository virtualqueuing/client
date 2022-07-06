import Container from "../components/Container";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import RightMenu from "../components/RightMenu/RightMenu";
import { useState } from "react";
import { Context } from "./Context";

const Homepage = () => {
  const [queueStatus, setQueueStatus] = useState("All");
  const [context, setContext] = useState(0);
  const [queues, setQueues] = useState([]);

  return (
    <Container>
      <Context.Provider value={[context, setContext]}>
        <LeftMenu leftQueues={queues} queueStatus={queueStatus} />
        <RightMenu
          queues={queues}
          setQueues={setQueues}
          queueStatus={queueStatus}
          setQueueStatus={setQueueStatus}
        />
      </Context.Provider>
    </Container>
  );
};

export default Homepage;
