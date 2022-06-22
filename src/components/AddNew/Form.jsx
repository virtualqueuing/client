import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import Buttons from "./AddNewButton";
import { StyledForm } from "../styles/AddNew.styles";
// import { queues } from "../../assets/dummyData/dummyData";
import axios from "axios";

const Form = () => {
  const handleSumbit = (event) => {
    const data = new FormData(event.target);
    axios.post(`http://localhost:3000/v1/queues`, Object.fromEntries(data.entries())).then();
  };

  return (
    <StyledForm onSubmit={handleSumbit}>
      <InputText />
      <InputSelect />
      <InputTextarea />
      <Buttons />
    </StyledForm>
  );
};

export default Form;
