import styled from "styled-components";
import Logo from "./Logo";
import { RightMenuContainer } from "./styles/RightMenu.styles";

const Wrapper = styled(RightMenuContainer)`
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 18px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const MainboardContainer = ({ children }) => {
  return (
    <Wrapper>
      <Logo logoSize="large" />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default MainboardContainer;
