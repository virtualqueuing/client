import styled from 'styled-components';
import { color, fontSize } from 'styled-system'

const LabelStyle = styled.label`
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;

  ${color}
  ${fontSize}
`

const TextareaStyle = styled.textarea`
  border: none;
  border-radius: 10px;
  min-height: 185px;
  background: linear-gradient(180deg, #F1E0E0 23.33%, rgba(253, 247, 247, 0) 194.67%);
`

const InputTextarea = () => {
  return (
    <>
      <LabelStyle htmlFor="other" color="fontColor" fontSize="1x">
        Others:
      </LabelStyle>
      <TextareaStyle id="other" name="other" rows="8" />
    </>
  );
};

export default InputTextarea;
