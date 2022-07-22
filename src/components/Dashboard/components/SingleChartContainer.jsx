import styled from "styled-components";
import { motion } from "framer-motion";

const SingleChartContainer = styled(motion.div)`
  width: ${({ containerWidth }) => containerWidth || "30%"};
  height: ${({ containerHeight }) => containerHeight || "360px"};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 40px 15px;
`;

export default SingleChartContainer;
