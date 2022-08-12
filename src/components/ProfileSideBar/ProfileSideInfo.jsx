import styled from "styled-components";
import UserDetails from "./UserDetails";
import UserPassword from "./UserPassword";
import { motion } from "framer-motion";
import { buttonVariants } from "../../components/RightMenu/Footer";
import MainboardContainer from "../MainboardContainer";
import { useContext } from "react";
import ProfileUpdateMessage from "./UpdateSuccessMessage";
import { ShowProfileUpdateContext } from "../../context/showProfileUpdateContext";

const ProfileContent = styled(motion.div)`
  width: 970px;
  display: flex;
  flex-direction: column;
`;

const ProfileSideInfo = () => {
  const { showProfileUpdateModal } = useContext(ShowProfileUpdateContext);

  return (
    <>
      {showProfileUpdateModal && <ProfileUpdateMessage />}
      <MainboardContainer>
        <ProfileContent variants={buttonVariants} initial="before" animate="after">
          <UserDetails />
          <UserPassword />
        </ProfileContent>
      </MainboardContainer>
    </>
  );
};

export default ProfileSideInfo;
