import styled from "styled-components";
import UserDetails from "./UserDetails";
import UserPassword from "./UserPassword";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "../../components/RightMenu/Footer";
import MainboardContainer from "../MainboardContainer";

const ProfileContent = styled(motion.div)`
  width: 970px;
  display: flex;
  flex-direction: column;
`;

const ProfileSideInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [disabledState, setDisabledState] = useState(true);

  return (
    <MainboardContainer>
      <ProfileContent variants={buttonVariants} initial="before" animate="after">
        <UserDetails disabled={disabledState} />
        <UserPassword disabled={disabledState} />
      </ProfileContent>
    </MainboardContainer>
  );
};

export default ProfileSideInfo;
