import Form from "../components/AddNew/Form";
import {
  AddNewWrapper,
  LayoutWrapper,
  HeaderInfo,
  HeaderAlert,
  HorizontalDivider,
} from "../components/styles/AddNew.styles";

const AddNewPage = () => (
  <AddNewWrapper>
    <LayoutWrapper>
      <HeaderInfo>
        <h2>Set Customs Info</h2>
        <p>Fill in required customs info</p>
      </HeaderInfo>
      <HeaderInfo>
        <HeaderAlert>Please fill all infomation before submitting</HeaderAlert>
      </HeaderInfo>
    </LayoutWrapper>
    <HorizontalDivider />
    <Form />
  </AddNewWrapper>
);

export default AddNewPage;
