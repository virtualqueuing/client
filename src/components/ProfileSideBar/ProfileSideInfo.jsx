import styled from "styled-components";
import UserDetails from "./UserDetails";
import UserPassword from "./UserPassword";
import { motion } from "framer-motion";
import { buttonVariants } from "../../components/RightMenu/Footer";
import MainboardContainer from "../MainboardContainer";
import { showProfileUpdateContext } from "../../pages/Context";
import { useState } from "react";
import ProfileUpdateMessage from "./UpdateSuccessMessage";

const ProfileContent = styled(motion.div)`
  width: 970px;
  display: flex;
  flex-direction: column;
`;

const ProfileSideInfo = () => {
  const [showProfileUpdateModal, setShowProfileUpdateModal] = useState(false);

  return (
    <showProfileUpdateContext.Provider value={{ setShowProfileUpdateModal }}>
      {showProfileUpdateModal && (
        <ProfileUpdateMessage setShowProfileUpdateModal={setShowProfileUpdateModal} />
      )}
      <MainboardContainer>
        <ProfileContent variants={buttonVariants} initial="before" animate="after">
          <UserDetails />
          <UserPassword />
        </ProfileContent>
      </MainboardContainer>
    </showProfileUpdateContext.Provider>
  );
};

export default ProfileSideInfo;
