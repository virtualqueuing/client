import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import { StyledForm } from "../styles/AddNew.styles";
import { showRequiredInfoContext } from "../../pages/Context";
import { useContext } from "react";
import Buttons from "./AddNewButton";
import addGuestApi from "../../apis/addGuestApi";
import updateGuestApi from "../../apis/updateGuestApi";

const Form = ({ formQueueInfo }) => {
  const { setShowRequiredInfo } = useContext(showRequiredInfoContext);

  const addNewSubmit = (event) => {
    const data = new FormData(event.target);
    addGuestApi(Object.fromEntries(data.entries()))
  };

  const updateSubmit = (event) => {
    const data = new FormData(event.target);
    updateGuestApi(formQueueInfo._id, Object.fromEntries(data.entries()));
  };

  return (
    <StyledForm onSubmit={formQueueInfo?updateSubmit:addNewSubmit} onInvalid={() => setShowRequiredInfo(true)}>
      <InputText inputInfo={formQueueInfo} />
      <InputSelect inputInfo={formQueueInfo} />
      <InputTextarea inputInfo={formQueueInfo} />
      <Buttons />
    </StyledForm>
  );
};

export default Form;
