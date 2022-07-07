import Container from "../components/Container";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import RightMenu from "../components/RightMenu/RightMenu";
import { useState } from "react";
import { Context } from "./Context";

const Homepage = () => {
  const [context, setContext] = useState(0);
  const [queues, setQueues] = useState([]);
  const [tableType, setTableType] = useState("Table Type");

  return (
    <Container>
      <Context.Provider value={[context, setContext]}>
        <LeftMenu leftQueues={queues} tableType={tableType} />
        <RightMenu
          queues={queues}
          setQueues={setQueues}
          tableType={tableType}
          setTableType={setTableType}
        />
      </Context.Provider>
    </Container>
  );
};

export default Homepage;
