import styled from "styled-components";
import { UserAvatar } from "../LeftMenu/LeftMenu";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";
import ChangeBtn from "../../assets/Icons/Profile-Vector.svg";
import UserDetailsForm from "./UserDetailsForm";
// import { showProfileUpdateContext } from "../../pages/Context";
// import ProfileUpdateModal from "./ProfileUpdateModal";

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fonts.secondary};
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
  margin-top: 15px;
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

const UserDetails = () => {
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
        <UserDetailsForm />
      </DetailsInfoContainer>
    </UserDetailsContainer>
  );
};

export default UserDetails;
