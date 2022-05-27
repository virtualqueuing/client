import Container from "../components/Container";
import SideInfo from "../components/SideInfo";
import MainBar from "../components/MainBar/MainBar";

const Homepage = () => {
  // const { colorMode } = useColorMode();

  return (
    <Container>
      <SideInfo />
      <MainBar />
    </Container>
  );
};

export default Homepage;
