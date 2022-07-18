import styled from 'styled-components';
import Logo from '../../assets/Profile-Logo.svg';

const NavContainer = styled.div`
    margin: 0;
    padding: 40px 15px;
    width: auto;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
    display: flex;
    flex-direction: column;
`

const ProfileLogo = styled.img`
    width: 223px;
    height: 70px;
    cursor: pointer;
`



const ProfileSideNavbar = () => {
    return (
        <NavContainer>
            <ProfileLogo src={Logo} alt="profileLogo" />
        </NavContainer>
    )
}

export default ProfileSideNavbar