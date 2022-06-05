import Form from "../components/AddNew/Form";
import logo from "../assets/Logo-v5.svg";
import { AddNewWrapper, Branding, AddNewStyledLogo } from "../components/styles/AddNew.styles";

const AddNewPage = ({ setShowAddNewForm }) => (
  <AddNewWrapper>
    <Branding>
      <AddNewStyledLogo src={logo} alt="logo" />
      <h1>Virtual Queuing</h1>
      <span onClick={() => setShowAddNewForm(false)}>&times;</span>
    </Branding>
    <Form />
  </AddNewWrapper>
);

export default AddNewPage;
