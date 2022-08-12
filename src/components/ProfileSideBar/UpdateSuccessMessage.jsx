import { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  HorizontalDivider,
  Modal,
  Title,
} from "../../components/RightMenu/components/ArrivalModal";
import { ModalBackground } from "../Modal/ModalBackground";
import checkedIcon from "../../assets/Icons/checkbox-circle-line.svg";
import { ShowProfileUpdateContext } from "../../context/showProfileUpdateContext";

const Wrapper = styled.div`
  margin: 10px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const ContentWrapper = styled(Wrapper)`
  flex-direction: column;
`;

const CheckBox = styled.img`
  width: 60px;
  margin-top: 15px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.components.modal.fontColor};
  margin: 10px 0 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 6px 40px 0px 0px;
`;

const Confirm = styled(motion.button)`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  margin-left: 20px;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.page.main};

  :hover {
    cursor: pointer;
  }
`;

const backdrop = {
  after: { opacity: 1 },
  before: { opacity: 0 },
};

const modal = {
  before: {
    y: "100vh",
    opacity: 0,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "spring", stiffness: 80 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px, 0px, 8px, rgb(255,255,255)",
    transition: {
      yoyo: 10,
    },
  },
};

const ProfileUpdateMessage = () => {
  const { setShowProfileUpdateModal } = useContext(ShowProfileUpdateContext);

  return (
    <ModalBackground
      variants={backdrop}
      initial="before"
      animate="after"
      onClick={() => setShowProfileUpdateModal(false)}
    >
      <Modal variants={modal} onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <Title>Success</Title>
        </Wrapper>
        <HorizontalDivider />
        <ContentWrapper>
          <CheckBox src={checkedIcon} alt="checkbox image" />
          <Description>Your changes have been saved</Description>
        </ContentWrapper>
        <HorizontalDivider />
        <ButtonWrapper>
          <Confirm
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => setShowProfileUpdateModal(false)}
          >
            Close
          </Confirm>
        </ButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

export default ProfileUpdateMessage;
