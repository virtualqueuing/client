import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import Button from "../AddNewButton";
import { StyledForm } from "../styles/AddNew.styles";

const Form = () => {
  const handleSumbit = (e)=> {
    e.preventDefault();
    console.log('You clicked sumbit');
  }

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
