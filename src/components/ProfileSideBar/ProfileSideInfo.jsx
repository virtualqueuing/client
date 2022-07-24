import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import UserPassword from "./UserPassword";
import { useState } from "react";
import ProfileFooter from "./ProfileFooter";
import { motion } from "framer-motion";
import { buttonVariants } from "../../components/RightMenu/Footer";

const ProfileContentWrapper = styled(RightMenuContainer)`
  align-items: center;
  justify-content: space-between;
`;

const ProfileContent = styled(motion.div)`
  width: 970px;
  height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProfileSideInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [disabledState, setDisabledState] = useState(true);
  return (
    <ProfileContentWrapper>
      <ProfileContent variants={buttonVariants} initial="before" animate="after">
        <UserDetails disabled={disabledState} />
        <UserPassword disabled={disabledState} />
      </ProfileContent>
      <ProfileFooter />
    </ProfileContentWrapper>
  );
};

export default ProfileSideInfo;
