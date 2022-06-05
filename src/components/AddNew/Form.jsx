import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import Button from "../AddNewButton";
import { StyledForm } from "../styles/AddNew.styles";
import { queues } from "../../assets/dummyData/dummyData";

const Form = () => {
  const handleSumbit = (event) => {
    const data = new FormData(event.target);
    queues.push(Object.fromEntries(data.entries()));
    event.preventDefault();
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <StyledForm onSubmit={handleSumbit}>
      <InputText />
      <InputSelect />
      <InputTextarea />
      <Button />
    </StyledForm>
  );
};

export default Form;
