import Form from "../components/AddNew/Form";
import { AddNewWrapper, Branding, AddNewStyledLogo } from "../components/styles/AddNew.styles";
import logo from "../assets/LoginPageImage/Logo.svg";

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
