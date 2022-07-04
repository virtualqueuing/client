import Container from "../components/Container";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import RightMenu from "../components/RightMenu/RightMenu";
import { useState } from "react";
import { Context } from "../pages/Context";

const Homepage = () => {
  const [context, setContext] = useState(0);

  return (
    <Container>
      <Context.Provider value={[context, setContext]}>
        <LeftMenu />
        <RightMenu />
      </Context.Provider>
    </Container>
  );
};

export default Homepage;
