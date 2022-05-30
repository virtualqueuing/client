import styled from "styled-components";
import Logo from "../components/AddNew/Logo";
import Form from "../components/AddNew/Form";

const AddNew = styled.div`
  max-width: 860px;
  max-height: 612px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-image: url("src/assets/world-map.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: overlay;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.addNewbg};
`;

const AddNewPage = () => (
  <AddNew>
    <Logo />
    <Form />
  </AddNew>
);

export default AddNewPage;
