import styled from "styled-components";
import { color, fontSize } from "styled-system";

const InputStyle = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.75);
  transform: matrix(1, 0, 0, 1, 0, 0);

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    ${color}
    ${fontSize}
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    ${color}
    ${fontSize}
  }
`;

const InputText = () => {
  return (
    <>
      <InputStyle
        type="text"
        name="name"
        placeholder="Name:"
        color="InputText"
        fontSize="1x"
        required
      />
      <InputStyle type="text" name="phone" placeholder="Phone:" fontSize="1x" required />
    </>
  );
};

export default InputText;
