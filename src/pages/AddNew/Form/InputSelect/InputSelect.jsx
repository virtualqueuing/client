import styled from "styled-components";
import InputSelectStyle from "./InputSelectStyle";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
  position: relative;
`

const InputSelect = () => {
  return (
    <Wrapper>
      <InputSelectStyle/>
    </Wrapper>
  );
};

export default InputSelect;
