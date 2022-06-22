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

const AddNewPage = (params) => {
  const [showRequiredInfo, setShowRequiredInfo] = useState(false);

  return (
    <showRequiredInfoContext.Provider value={{ setShowRequiredInfo }}>
      <AddNewWrapper wrapperQueueInfo={params.queueInfo}>
        <LayoutWrapper>
          <HeaderInfo>
            <h2>Set Customs Info</h2>
            <p>Fill in required customs info</p>
          </HeaderInfo>
          <HeaderInfo>
            {showRequiredInfo && (
              <HeaderAlert>Please fill all infomation before submitting</HeaderAlert>
            )}
          </HeaderInfo>
        </LayoutWrapper>
        <HorizontalDivider />
        <Form formQueueInfo={params.queueInfo} />
      </AddNewWrapper>
    </showRequiredInfoContext.Provider>
  );
};

export default AddNewPage;
