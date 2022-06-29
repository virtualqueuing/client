import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import { StyledForm } from "../styles/AddNew.styles";
import axios from "axios";
import { showRequiredInfoContext } from "../../pages/Context";
import { useContext } from "react";
import Buttons from "./AddNewButton";
import { API_URI } from "../../constant";

const Form = (params) => {
  const { setShowRequiredInfo } = useContext(showRequiredInfoContext);

  const handleSumbit = (event) => {
    const data = new FormData(event.target);
    axios.post(`${API_URI}/v1/queues`, Object.fromEntries(data.entries())).then();
    // console.log(Object.fromEntries(data.entries()));
    // event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSumbit} onInvalid={() => setShowRequiredInfo(true)}>
      <InputText inputInfo={params.formQueueInfo} />
      <InputSelect inputInfo={params.formQueueInfo} />
      <InputTextarea inputInfo={params.formQueueInfo} />
      <Buttons />
    </StyledForm>
  );
};

export default Form;
