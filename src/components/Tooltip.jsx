import React from "react";
import { useState } from "react";
import {
  CenterContainer,
  TooltipBox,
  TooltipTarget,
  TooltipWrapper,
} from "./styles/Tooltip.styles";

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const showTooltip = isHovered;

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer>
          <TooltipBox>{text}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
