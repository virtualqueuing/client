import Form from "../components/AddNew/Form";
import { useState } from "react";
import { showContext } from "./Context";
import {
  AddNewWrapper,
  LayoutWrapper,
  HeaderInfo,
  HeaderAlert,
  HorizontalDivider,
} from "../components/styles/AddNew.styles";

const AddNewPage = () => {
  const [showRequiredInfo, setShowRequiredInfo] = useState(false);

  return (
    <showContext.Provider value={{ setShowRequiredInfo }}>
      <AddNewWrapper>
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
        <Form />
      </AddNewWrapper>
    </showContext.Provider>
  );
};

export default AddNewPage;
