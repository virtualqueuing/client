import styled from "styled-components";
import { UserAvatar } from "../LeftMenu/LeftMenu";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";
import ChangeBtn from "../../assets/Icons/Profile-Vector.svg";
import ProfileInfoProperty from "./ProfileInfoProperty";
import ProfileButton from "./ProfileButton";
import { useContext } from "react";
import { UserContext } from "../../pages/Context";

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
`;

export const DetailsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 4rem 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  border-radius: 20px;
`;

const UserAvatarWrapper = styled.div`
  width: auto;
  position: relative;
`;

const UploadBtnWrapper = styled.div`
  width: 18px;
  height: 18px;
  border: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 4%;
  top: 65%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.components.arrivalButton.fontColor.normal};
`;

const UploadBtn = styled.img`
  width: 12px;
  height: 12px;
`;

export const DetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserDetails = ({ disabled }) => {
  const { user } = useContext(UserContext);
  const { fullName, email, role, branch } = user.data.data;
  const UserNameEmailArr = { "User Name": fullName, Email: email };
  const roleBranchArr = { Role: role, Branch: branch };

  return (
    <UserDetailsContainer>
      <Title>Personal Details</Title>
      <DetailsInfoContainer>
        <UserAvatarWrapper>
          <UserAvatar src={UserLine} alt="User photo" />
          <UploadBtnWrapper>
            <UploadBtn src={ChangeBtn} alt="Upload photo button" />
          </UploadBtnWrapper>
        </UserAvatarWrapper>
        <DetailsForm>
          <ProfileInfoProperty personDetailsArr={UserNameEmailArr} disabled={disabled} />
          <ProfileInfoProperty personDetailsArr={roleBranchArr} disabled={disabled} />
        </DetailsForm>
        <ProfileButton />
      </DetailsInfoContainer>
    </UserDetailsContainer>
  );
};

export default UserDetails;
