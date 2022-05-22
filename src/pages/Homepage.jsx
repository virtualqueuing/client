import { Box, Container, useColorMode } from "@chakra-ui/react";
import { AddTodo, Content, Header, ListTodo } from "../components";

const Homepage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bgColor={colorMode === "light" ? "blue.50" : "blue.900"} minH="100vh" pb="10">
      <Container maxW="sm" pt="32">
        <Header />
        <Content>
          <ListTodo />
          <AddTodo />
        </Content>
      </Container>
    </Box>
  );
};

export default Homepage;
