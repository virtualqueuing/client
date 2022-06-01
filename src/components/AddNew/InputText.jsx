import { StyledInputText } from "../styles/AddNew.styles";

const InputText = () => {

  return (
    <>
      <StyledInputText type="text" name="name" placeholder="Name:" />
      <StyledInputText type="text" name="phone" placeholder="Phone:" />
    </>
  );
};

export default InputText;
