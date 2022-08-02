import { useState } from "react";
import styled, { css } from "styled-components";

const PersonalDetailsBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;

const EditBtnStyle = css`
  width: 243px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.components.loginButton.background};
  border-radius: 15px;
  border: transparent;
  color: ${({ theme }) => theme.colors.components.profileButton.fontColor};
  font-size: 26px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.5s;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.components.queueContainer.background} 0px 20px 30px -10px;
    transform: scale(1.05);
  }
`;

const PersonalDetailsBtn = styled.button`
  ${EditBtnStyle};
`;

const PersonalDetailsEdit = styled.div`
  ${EditBtnStyle};
  margin: auto 0;
  text-align: center;
  line-height: 50px;
`;

const ProfileButton = ({ onClick }) => {
  const [editableBtn, seteditableBtn] = useState(true);

  return (
    <PersonalDetailsBtnWrapper onClick={() => seteditableBtn(false)}>
      {editableBtn ? (
        <PersonalDetailsEdit onClick={onClick}>Edit</PersonalDetailsEdit>
      ) : (
        <PersonalDetailsBtn type="submit">Save</PersonalDetailsBtn>
      )}
    </PersonalDetailsBtnWrapper>
  );
};

export default ProfileButton;
