import styled, { css } from "styled-components";
import React, { useState } from "react";
import { ModalBackground } from "../../../components/Modal/ModalBackground";
import { ABSENT_REASONS } from "../../../constant";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { HorizontalDivider, Modal, Title, Wrapper } from "./ArrivalModal";
import downArrowSvg from "../../../assets/Icons/down-arrow-svgrepo-com.svg";

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.components.modal.fontColor};
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
`;

const CustomerInputSelectBg = styled.div`
  ::after {
    content: "";
    background-image: url(${downArrowSvg});
    width: 15px;
    height: 15px;
    right: 30px;
    top: 28px;
    position: absolute;
    pointer-events: none;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  position: absolute;
  padding: 0 4px;
  margin-left: 10px;
  top: -12px;
  display: inline-block;
  background-color: white;
  z-index: 10;
`;

const InputLayout = css`
  height: 60px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  border-radius: 10px;
`;

const StyledInputSelect = styled.select`
  ${InputLayout};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.fonts.secondary};
  width: 230%;
  padding-left: 12px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 6px 40px 0px 0px;
`;

const Absent = styled(motion.button)`
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
    transition: { type: "spring", stiffness: 50 },
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

const AbsentModal = ({ id, setShowAbsentModal, queueAbsent, setQueues }) => {
  const [absentReason, setAbsentReason] = useState("");

  const sendAbsentCommand = (id, setQueues, absentReason) => {
    queueAbsent(id, setQueues, absentReason);
    setShowAbsentModal(false);
  };

  return (
    <ModalBackground
      variants={backdrop}
      initial="before"
      animate="after"
      onClick={() => setShowAbsentModal(false)}
    >
      <Modal variants={modal} onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <Title>Confirm Absent</Title>
        </Wrapper>
        <HorizontalDivider />
        <Wrapper>
          <Description>Please confirm the reason below why the customers are absent.</Description>
        </Wrapper>
        <Wrapper>
          <InputWrapper>
            <CustomerInputSelectBg>
              <Label htmlFor="reasons">Reasons for Absence</Label>
              <StyledInputSelect
                id="reasons"
                name="reasons"
                value={absentReason}
                onChange={(e) => setAbsentReason(e.target.value)}
                required
              >
                <option selected hidden />
                {ABSENT_REASONS.map((reason) => (
                  <option key={reason}>{reason}</option>
                ))}
              </StyledInputSelect>
            </CustomerInputSelectBg>
          </InputWrapper>
        </Wrapper>
        <HorizontalDivider />
        <ButtonWrapper>
          <Cancel
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => setShowAbsentModal(false)}
          >
            Cancel
          </Cancel>
          <Absent
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => sendAbsentCommand(id, setQueues, absentReason)}
          >
            Proceed
          </Absent>
        </ButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

export default AbsentModal;

AbsentModal.propTypes = {
  id: PropTypes.string.isRequired,
  setShowAbsentModal: PropTypes.func.isRequired,
  queueAbsent: PropTypes.func.isRequired,
  setQueues: PropTypes.func.isRequired,
};
