import styled from "styled-components";
import { ModalBackground } from "../../../components/Modal/ModalBackground";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Modal = styled(motion.div)`
  width: 540px;
  height: 260px;
  margin: auto;
  overflow: hidden;
  background: white;
  z-index: 999;
  border-radius: 30px;
  -webkit-box-shadow: 0px 20px 30px 15px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 20px 30px 15px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const HorizontalDivider = styled.div`
  height: 1px;
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  opacity: 0.8;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["1x"]};
  color: ${({ theme }) => theme.colors.components.modal.fontColor};
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.components.modal.fontColor};
  margin-bottom: 80px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 6px 40px 0px 0px;
`;

const Confirm = styled(motion.button)`
  width: 100px;
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

const Cancel = styled(motion.span)`
  display: inline-block;
  padding: 5px 10px;
  margin-left: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.fonts.main};

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

const ArrivalModal = ({ id, setShowArrivalModal, queueComplete, setQueues }) => {
  const sendConfirmCommand = (id, setQueues) => {
    queueComplete(id, setQueues);
    setShowArrivalModal(false);
  };

  return (
    <ModalBackground
      variants={backdrop}
      initial="before"
      animate="after"
      onClick={() => setShowArrivalModal(false)}
    >
      <Modal variants={modal} onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <Title>Confirm Arrival</Title>
        </Wrapper>
        <HorizontalDivider />
        <Wrapper>
          <Description>Please confirm if the customers have arrived.</Description>
        </Wrapper>
        <HorizontalDivider />
        <ButtonWrapper>
          <Cancel
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => setShowArrivalModal(false)}
          >
            Cancel
          </Cancel>
          <Confirm
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => sendConfirmCommand(id, setQueues)}
          >
            Yes
          </Confirm>
        </ButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

export default ArrivalModal;

ArrivalModal.propTypes = {
  id: PropTypes.string.isRequired,
  setShowArrivalModal: PropTypes.func.isRequired,
  queueComplete: PropTypes.func.isRequired,
  setQueues: PropTypes.func.isRequired,
};
