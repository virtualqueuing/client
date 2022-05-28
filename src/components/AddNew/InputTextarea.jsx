import styled from "styled-components";

const LabelStyle = styled.label`
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.colors.md};
`;

const TextareaStyle = styled.textarea`
  border: none;
  border-radius: 10px;
  min-height: 185px;
  background: linear-gradient(180deg, #f1e0e0 23.33%, rgba(253, 247, 247, 0) 194.67%);
`;

const InputTextarea = () => {
  return (
    <>
      <LabelStyle htmlFor="other">Others:</LabelStyle>
      <TextareaStyle id="other" name="other" rows="8" />
    </>
  );
};

export default InputTextarea;
