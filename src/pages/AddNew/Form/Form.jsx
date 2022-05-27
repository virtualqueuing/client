import styled from "styled-components";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import Button from "./Button";

const Wrapper = styled.form`
  display: flex;  
  flex-wrap: wrap;
  margin: 0 80px;
  line-height:2rem;
  
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;    
    box-sizing: border-box;
    margin-top: 4px;
    margin-bottom: 16px;
    resize: vertical;
    outline: none;
}
`

const Form = () => {
  return (
    <Wrapper method="post" action="">
      <InputText />      
      <InputSelect />
      <InputTextarea />
      <Button />
    </Wrapper>
  );
};

export default Form;
