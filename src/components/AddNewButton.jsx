import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const ButtonStyle = styled.input`
  width: 290px;
  height: 100px;
  border-radius: 10px;
  margin-top: 16px;
  border: none;
  color: white;
  font-weight: 600;
  background: linear-gradient(180deg, #c81927 -21.43%, rgba(230, 0, 18, 0) 132.47%);
  padding-bottom: 35px;
  opacity: 1;
  font-size: ${({ theme }) => theme.fontSizes["2x"]};
  position: absolute;
  /* Top: 0; */

  :hover {
    cursor: pointer;
  }
`;


const Button = () => {
  return (
    <Wrapper>
      <ButtonStyle type="submit" name="submitInfo" value="Submit"/>
    </Wrapper>
  );
};

export default Button;
