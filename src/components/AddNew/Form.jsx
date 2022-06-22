import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import Buttons from "./AddNewButton";
import { StyledForm } from "../styles/AddNew.styles";
// import { queues } from "../../assets/dummyData/dummyData";
import axios from "axios";

const Form = (params) => {
  const handleSumbit = (event) => {
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
    axios.post(`http://localhost:3000/v1/queues`, Object.fromEntries(data.entries())).then();
  };

  return (
    <StyledForm onSubmit={handleSumbit}>
      <InputText inputInfo={params.formQueueInfo} />
      <InputSelect inputInfo={params.formQueueInfo} />
      <InputTextarea inputInfo={params.formQueueInfo} />
      <Buttons />
    </StyledForm>
  );
};

export default Form;
