import Container from "../components/Container";
import LeftSideNavbar from "../components/LeftSideNavbar";
import ProfileSideInfo from "../components/ProfileSideBar/ProfileSideInfo";

const ProfilePage = () => {
  return (
    <Container>
      <LeftSideNavbar />
      <ProfileSideInfo />
    </Container>
  );
};

export default ProfilePage;
