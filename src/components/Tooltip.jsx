import React, { useState } from "react";
import { TooltipWrapper, TooltipTip } from "./styles/Tooltip.styles";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && <TooltipTip>{props.content}</TooltipTip>}
    </TooltipWrapper>
  );
};

export default Tooltip;
