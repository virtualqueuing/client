import styled from "styled-components";

/* Wrapping */
export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

/* Absolute positioning */
export const TooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: white;
  background: grey;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  ::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: -6px;
  }
`;

// /* Absolute positioning */
// .Tooltip-Tip.top {
//   top: -30px;
// }
// /* CSS border triangles */
// .Tooltip-Tip.top::before {
//   top: 100%;
//   border-top-color: grey;
// }

// /* Absolute positioning */
// .Tooltip-Tip.right {
//   left: calc(100% + 30px);
//   top: 50%;
//   transform: translateX(0) translateY(-50%);
// }
// /* CSS border triangles */
// .Tooltip-Tip.right::before {
//   left: -6px;
//   top: 50%;
//   transform: translateX(0) translateY(-50%);
//   border-right-color: grey;
// }

// /* Absolute positioning */
// .Tooltip-Tip.bottom {
//   bottom: -30px;
// }
// /* CSS border triangles */
// .Tooltip-Tip.bottom::before {
//   bottom: 100%;
//   border-bottom-color: grey;
// }

// /* Absolute positioning */
// .Tooltip-Tip.left {
//   left: auto;
//   right: calc(100% + 30px);
//   top: 50%;
//   transform: translateX(0) translateY(-50%);
// }
// /* CSS border triangles */
// .Tooltip-Tip.left::before {
//   left: auto;
//   right: -12px;
//   top: 50%;
//   transform: translateX(0) translateY(-50%);
//   border-left-color: grey;
// }
