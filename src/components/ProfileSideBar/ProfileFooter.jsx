import styled from "styled-components";
import { motion } from "framer-motion";
import { buttonVariants } from "../RightMenu/Footer";
import Footer from "../MainHomepage/MainPageFooter";

const ProfileFooterContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileFooter = () => {
  return (
    <ProfileFooterContainer variants={buttonVariants} initial="before" animate="after">
      <Footer />
    </ProfileFooterContainer>
  );
};

export default ProfileFooter;
