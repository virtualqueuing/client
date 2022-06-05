import { StyledTextarea } from "../styles/AddNew.styles";

const InputTextarea = () => {
  return (
    <>
      <StyledTextarea htmlFor="other">Others:</StyledTextarea>
      <textarea name="other" rows="8" />
    </>
  );
};

export default InputTextarea;
