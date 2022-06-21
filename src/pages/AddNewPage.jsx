import Form from "../components/AddNew/Form";
import {
  AddNewWrapper,
  LayoutWrapper,
  HeaderInfo,
  HeaderAlert,
  HorizontalDivider,
} from "../components/styles/AddNew.styles";

const AddNewPage = (params) => (
  <AddNewWrapper wrapperQueueInfo={params.queueInfo}>
    <LayoutWrapper>
      <HeaderInfo>
        <h2>Set Customs Info</h2>
        <p>Fill in required customs info</p>
      </HeaderInfo>
      <HeaderInfo>
        <HeaderAlert>Please fill all information before submitting</HeaderAlert>
      </HeaderInfo>
    </LayoutWrapper>
    <HorizontalDivider />
    <Form formQueueInfo={params.queueInfo} />
  </AddNewWrapper>
);

export default AddNewPage;
