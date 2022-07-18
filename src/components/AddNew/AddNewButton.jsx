import styled from "styled-components";
import React from "react";
import { showNewFormContext } from "../../pages/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  margin-top: -10px;
`;

const Submit = styled(motion.input)`
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

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px, 0px, 8px, rgb(255,255,255)",
    transition: {
      yoyo: 10,
    },
  },
};

const Buttons = () => {
  const { setShowAddNewForm } = useContext(showNewFormContext);
  return (
    <Wrapper>
      <Cancel variants={buttonVariants} whileHover="hover" onClick={() => setShowAddNewForm(false)}>
        Cancel
      </Cancel>
      <Submit
        variants={buttonVariants}
        whileHover="hover"
        type="submit"
        name="submitInfo"
        value="Submit"
      />
    </Wrapper>
  );
};

export default Buttons;
