import EditForm from "../components/AddNew/editForm";
import {
  AddNewWrapper,
  LayoutWrapper,
  HeaderInfo,
  HeaderAlert,
  HorizontalDivider,
} from "../components/styles/AddNew.styles";

const EditGuestPage = (params) => (
  <AddNewWrapper wrapperQueueInfo={params.queueInfo}>
    <LayoutWrapper>
      <HeaderInfo>
        <h2>Edit Guest Info</h2>
        <p>Fill in required info</p>
      </HeaderInfo>
      <HeaderInfo>
        <HeaderAlert>Please fill all information before submitting</HeaderAlert>
      </HeaderInfo>
    </LayoutWrapper>
    <HorizontalDivider />
    <EditForm formQueueInfo={params.queueInfo} />
  </AddNewWrapper>
);

export default EditGuestPage;
