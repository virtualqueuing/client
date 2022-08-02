import styled from "styled-components";
import AccountIcon from "../../assets/Icons/Menu-accoount.svg";
import {
  LeftSideBarOption,
  LeftSideBarOptionIcon,
  LeftSideBarOptionDescription,
  Background,
} from "../LeftMenu/LeftMenu";
import Logo from "../Logo";

const ProfileSideBarOption = styled(LeftSideBarOption)`
  justify-content: center;
`;

const ProfileSideNavbar = () => {
  return (
    <Background>
      <Logo logoSize="large" />
      <ProfileSideBarOption>
        <LeftSideBarOptionIcon src={AccountIcon} alt="Account Icon" />
        <LeftSideBarOptionDescription>Account</LeftSideBarOptionDescription>
      </ProfileSideBarOption>
    </Background>
  );
};

export default ProfileSideNavbar;
