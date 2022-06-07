import { StyledTextarea } from "../styles/AddNew.styles";

const InputTextarea = () => {
  return (
    <>
      <StyledTextarea htmlFor="notes">Notes:</StyledTextarea>
      <textarea name="notes" rows="8" />
    </>
  );
};

export default InputTextarea;
