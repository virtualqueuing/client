import styled from 'styled-components';
import Logo from '../../assets/Profile-Logo.svg';
import AccountIcon from '../../assets/Icons/Menu-accoount.svg';
import { LeftSideBarOption, LeftSideBarOptionIcon, LeftSideBarOptionDescription } from '../LeftMenu/LeftMenu'
import { useNavigate } from 'react-router-dom';

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
`

const ProfileLogo = styled.img`
    width: 223px;
    height: 70px;
    cursor: pointer;
`

const ProfileSideBarOption = styled(LeftSideBarOption)`
    justify-content: center;
`



const ProfileSideNavbar = () => {
    const navigate = useNavigate()
    const handleLogo = () => {
        navigate("/");
    }
    return (
        <NavContainer>
            <ProfileLogo src={Logo} alt="profileLogo" onClick={handleLogo} />
            <ProfileSideBarOption>
                <LeftSideBarOptionIcon src={AccountIcon} alt="Account Icon" />
                <LeftSideBarOptionDescription>Account</LeftSideBarOptionDescription>
            </ProfileSideBarOption>
        </NavContainer>
    )
}

export default ProfileSideNavbar