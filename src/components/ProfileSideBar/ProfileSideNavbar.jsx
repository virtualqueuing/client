import styled from "styled-components";
import AccountIcon from "../../assets/Icons/Menu-accoount.svg";
import {
  LeftSideBarOption,
  LeftSideBarOptionIcon,
  LeftSideBarOptionDescription,
} from "../LeftMenu/LeftMenu";
import Logo from "../Logo";

const NavContainer = styled.div`
  margin: 0;
  padding: 40px 15px;
  width: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
`;

const ProfileSideBarOption = styled(LeftSideBarOption)`
  justify-content: center;
`;

const ProfileSideNavbar = () => {
  return (
    <NavContainer>
      <Logo path={"/"} alt="profileLogo" logoSize="large" />
      <ProfileSideBarOption>
        <LeftSideBarOptionIcon src={AccountIcon} alt="Account Icon" />
        <LeftSideBarOptionDescription>Account</LeftSideBarOptionDescription>
      </ProfileSideBarOption>
    </NavContainer>
  );
};

export default ProfileSideNavbar;
