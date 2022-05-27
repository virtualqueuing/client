import styled from "styled-components";
import { color } from "styled-system";
import Logo from "./Logo";
import Form from "./Form";

const Wrapper = styled.div`
  max-width: 860px;
  max-height: 612px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-image: url("src/assets/img/world-map.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: overlay;
  z-index: 999;

  ${color};
`;

const AddNew = () => (
  <Wrapper bg="addNewbg">
    <Logo />
    <Form />
  </Wrapper>
);

export default AddNew;
