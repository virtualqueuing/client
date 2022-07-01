import { InputWrapper, StyledInputText, Label } from "../styles/AddNew.styles";

const InputText = ({inputInfo}) => {
  return (
    <InputWrapper>
      <div>
        <Label for="name">Name</Label>
        <StyledInputText
          id="Name"
          type="text"
          name="name"
          defaultValue={inputInfo?.name ? inputInfo.name : ""}
          required
        />
      </div>
      <div>
        <Label for="phoneNumber">Phone number</Label>
        <StyledInputText
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          defaultValue={inputInfo?.phoneNumber ? inputInfo.phoneNumber : ""}
          required
        />
      </div>
    </InputWrapper>
  );
};

export default InputText;
