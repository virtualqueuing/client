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

const backdrop = {
  after: { opacity: 1 },
  before: { opacity: 0 }
}

const modal = {
  before: {
    y: '100vh',
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: 'spring', stiffness: 80 }
   }
}
const AddNewPage = ({ queueInfo, setShowAddNewForm }) => {
  const [showRequiredInfo, setShowRequiredInfo] = useState(false);

  return (
    <showRequiredInfoContext.Provider value={{ setShowRequiredInfo }}>
      <ModalBackground variants={backdrop} initial="before" animate="after" onClick={() => setShowAddNewForm(false)} >
      <AddNewWrapper variants={modal} wrapperQueueInfo={queueInfo} onClick={(e)=>e.stopPropagation()}>
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
      </ModalBackground>
    </showRequiredInfoContext.Provider>
  );
};

export default AddNewPage;
