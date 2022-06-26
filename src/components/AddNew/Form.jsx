import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import { StyledForm } from "../styles/AddNew.styles";
// import { queues } from "../../assets/dummyData/dummyData";
import axios from "axios";
import { showRequiredInfoContext } from "../../pages/Context";
import { useContext } from "react";
import Buttons from "./AddNewButton";

const Form = (params) => {
  const { setShowRequiredInfo } = useContext(showRequiredInfoContext);

  const handleSumbit = (event) => {
    const data = new FormData(event.target);
    axios.post(`http://localhost:3000/v1/queues`, Object.fromEntries(data.entries())).then();
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
