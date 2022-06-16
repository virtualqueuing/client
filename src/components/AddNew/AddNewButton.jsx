import styled from "styled-components";
import { Context } from "../../pages/Context";
import { useContext } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  margin-top: -10px;
`;

const Submit = styled.input`
  width: 100px;
  border-radius: 15px;
  margin-left: 20px;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.page.main};

  :hover {
    cursor: pointer;
  }
`;

const Cancel = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-left: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.fonts.main};

  :hover {
    cursor: pointer;
  }
`;

const Buttons = () => {
  const { setShowAddNewForm } = useContext(Context);
  return (
    <Wrapper>
      <Cancel onClick={() => setShowAddNewForm(false)}>Cancel</Cancel>
      <Submit type="submit" name="submitInfo" value="Submit" />
    </Wrapper>
  );
};

export default Buttons;
