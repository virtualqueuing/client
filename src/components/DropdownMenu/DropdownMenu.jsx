import styled, { css } from "styled-components";

const DropdownMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  background-color: red;
  border-radius: 10px;
  padding: 10px 20px;
  width: 200px;
  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: 0.5s ease;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
          transition: 0.5s ease;
        `}
`;

const DropdownItem = styled.li`
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const Dropdown = (props) => {
  return (
    <DropdownMenu isOpen={props.openDropdown}>
      <ul>
        <DropdownItem>Testing</DropdownItem>
      </ul>
    </DropdownMenu>
  );
};

export default Dropdown;
