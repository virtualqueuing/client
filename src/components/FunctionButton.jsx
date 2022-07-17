import styled from "styled-components";
import { motion } from "framer-motion";

export const FunctionButton = styled(motion.button)`
  border-radius: ${({ borderRadius }) => borderRadius || "50px"};
  width: ${({ width }) => width || "130px"};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  margin: 30px 0;
  padding: 20px 50px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
`;

export const AddGuestButton = styled(FunctionButton)`
  background-color: ${({ theme }) => theme.colors.page.main};
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  width: 250px;
  border-radius: 20px;
  @media (max-width: 1500px) {
    width: 150px;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
  }
`;
