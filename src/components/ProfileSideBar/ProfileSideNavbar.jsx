import styled from "styled-components";
import AccountIcon from "../../assets/Icons/Menu-accoount.svg";
import {
  LeftSideBarOption,
  LeftSideBarOptionIcon,
  LeftSideBarOptionDescription,
  Background,
} from "../LeftMenu/LeftMenu";
import Logo from "../Logo";

// const NavContainer = styled.div`
//   margin: 0;
//   padding: 30px 15px;
//   width: auto;
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 3%;
// `;

const ProfileSideBarOption = styled(LeftSideBarOption)`
  justify-content: center;
`;

const ProfileSideNavbar = () => {
  return (
    <Background>
      <Logo path={"/"} alt="profileLogo" logoSize="large" />
      <ProfileSideBarOption>
        <LeftSideBarOptionIcon src={AccountIcon} alt="Account Icon" />
        <LeftSideBarOptionDescription>Account</LeftSideBarOptionDescription>
      </ProfileSideBarOption>
    </Background>
  );
};

export default ProfileSideNavbar;
