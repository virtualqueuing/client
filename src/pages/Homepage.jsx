import Container from "../components/Container";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import RightMenu from "../components/RightMenu/RightMenu";
import { useState } from "react";
import { Context } from "./Context";

const Homepage = (path, alt, style) => {
  const [queueStatus, setQueueStatus] = useState("All");
  const [context, setContext] = useState(0);
  const [queues, setQueues] = useState([]);
  const [tableType, setTableType] = useState("Table Type");

  return (
    <Container>
      <Context.Provider value={[context, setContext]}>
        <LeftMenu leftQueues={queues} tableType={tableType} queueStatus={queueStatus} />
        <RightMenu
          queues={queues}
          setQueues={setQueues}
          tableType={tableType}
          queueStatus={queueStatus}
          setQueueStatus={setQueueStatus}
          setTableType={setTableType}
          path={path}
          alt={alt}
          style={style}
        />
      </Context.Provider>
    </Container>
  );
};

export default Homepage;
