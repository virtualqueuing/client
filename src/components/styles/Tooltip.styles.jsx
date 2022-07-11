import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  z-index:1;
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: 120%;
  pointer-events: none;
`;

export const TooltipBox = styled.span`
  position: relative;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

export const TooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
  outline: none;

  & :focus {
    outline: none;
  }

  & > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`;
