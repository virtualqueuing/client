import Form from "../components/AddNew/Form";
import { useState } from "react";
import { showRequiredInfoContext } from "./Context";
import {
  AddNewWrapper,
  LayoutWrapper,
  HeaderInfo,
  HeaderAlert,
  HorizontalDivider,
} from "../components/styles/AddNew.styles";
import { ModalBackground } from "../components/Modal/ModalBackground";

const AddNewPage = ({ queueInfo, setShowAddNewForm }) => {
  const [showRequiredInfo, setShowRequiredInfo] = useState(false);
  console.log(queueInfo)

  return (
    <showRequiredInfoContext.Provider value={{ setShowRequiredInfo }}>
      <ModalBackground onClick={() => setShowAddNewForm(false)} />
      <AddNewWrapper wrapperQueueInfo={queueInfo}>
        <LayoutWrapper>
          <HeaderInfo>
            <h2>Customer Info</h2>
            <p>Fill in required customer info</p>
          </HeaderInfo>
          <HeaderInfo>
            {showRequiredInfo && (
              <HeaderAlert>Please fill all information before submitting</HeaderAlert>
            )}
          </HeaderInfo>
        </LayoutWrapper>
        <HorizontalDivider />
        <Form formQueueInfo={queueInfo} />
      </AddNewWrapper>
    </showRequiredInfoContext.Provider>
  );
};

export default AddNewPage;
