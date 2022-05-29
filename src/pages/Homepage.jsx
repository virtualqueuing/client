import Container from "../components/Container";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import RightMenu from "../components/RightMenu/RightMenu";

const Homepage = () => {
  // const { colorMode } = useColorMode();

  return (
    <Container>
      <LeftMenu />
      <RightMenu />
    </Container>
  );
};

export default Homepage;
