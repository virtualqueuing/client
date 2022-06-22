import { InputWrapper, StyledInputText, Label } from "../styles/AddNew.styles";

const InputText = () => {
  return (
    <InputWrapper>
      <div>
        <Label for="name">Name</Label>
        <StyledInputText id="Name" type="text" name="name" required />
      </div>
      <div>
        <Label for="phoneNumber">Phone number</Label>
        <StyledInputText id="phoneNumber" type="text" name="phoneNumber" required />
      </div>
    </InputWrapper>
  );
};

export default InputText;
