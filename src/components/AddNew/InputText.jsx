import { InputWrapper, StyledInputText, Label } from "../styles/AddNew.styles";

const InputText = (params) => {
  return (
    <InputWrapper>
      <div>
        <Label for="name">Name</Label>
        <StyledInputText
          id="Name"
          type="text"
          name="name"
          defaultValue={params?.inputInfo?.name ? params.inputInfo.name : ""}
        />
      </div>
      <div>
        <Label for="phoneNumber">Phone number</Label>
        <StyledInputText
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          defaultValue={params?.inputInfo?.phoneNumber ? params.inputInfo.phoneNumber : ""}
        />
      </div>
    </InputWrapper>
  );
};

export default InputText;
