import Form from "../components/AddNew/Form";
import logo from "../assets/Logo.svg";
import { AddNewWrapper, Branding, AddNewStyledLogo } from "../components/styles/AddNew.styles";

const AddNewPage = (props) => {
  return props.trigger ? (
    <AddNewWrapper>
      <Branding>
        <AddNewStyledLogo src={logo} alt="logo" />
        <h1>Virtual Queuing</h1>
      </Branding>
      <Form />
    </AddNewWrapper>
  ) : (
    ""
  );
};

export default AddNewPage;
