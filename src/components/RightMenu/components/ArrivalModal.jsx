import styled from "styled-components";
import { ModalBackground } from "../../../components/Modal/ModalBackground";

const Modal = styled.div`
  width: 540px;
  height: 260px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Confirm = styled.button`
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

const Cancel = styled.span`
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

const ArrivalModal = ({ id, setShowArrivalModal, queueComplete }) => {
  return (
    <ModalBackground onClick={() => setShowArrivalModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <Title>Confirm Arrival</Title>
        </Wrapper>
        <HorizontalDivider />
        <Wrapper>
          <Description>Please confirm if the customers have arrived.</Description>
        </Wrapper>
        <HorizontalDivider />
        <ButtonWrapper>
          <Cancel onClick={() => setShowArrivalModal(false)}>Cancel</Cancel>
          <Confirm>Yes</Confirm>
        </ButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

export default ArrivalModal;