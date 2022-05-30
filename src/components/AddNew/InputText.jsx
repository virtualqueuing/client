import styled from "styled-components";

const InputStyle = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.75);
  transform: matrix(1, 0, 0, 1, 0, 0);

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${({ theme }) => theme.colors.InputText};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${({ theme }) => theme.colors.InputText};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const InputText = () => {
  return (
    <>
      <InputStyle type="text" name="name" placeholder="Name:" required />
      <InputStyle type="text" name="phone" placeholder="Phone:" required />
    </>
  );
};

export default InputText;
