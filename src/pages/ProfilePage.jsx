import Container from '../components/Container';
import ProfileSideInfo from '../components/ProfileSideBar/ProfileSideInfo';
import ProfileSideNavbar from '../components/ProfileSideBar/ProfileSideNavbar';
import styled from 'styled-components';

const ProfilePage = () => {
    return (
        <Container>
            <ProfileSideNavbar />
            <ProfileSideInfo />
        </Container>
    )
}

export default ProfilePage