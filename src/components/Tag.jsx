import styled, { css } from "styled-components";

const Tag = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.fonts.secondary};
  width: auto;
  padding: 5px 15px 5px 30px;
  border: none;
  border-radius: 15px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 10px;

  :hover {
    cursor: pointer;
  }

  ${({ tagTypes }) => {
    switch (tagTypes) {
      case "birthday":
        return css`
          background-color: ${({ theme }) => theme.colors.components.tags.birthdayTag};
          background-image: ${`url('src/assets/Icons/Note_Birthday.svg')`};
        `;
      case "wheelchair":
        return css`
          background-color: ${({ theme }) => theme.colors.components.tags.wheelchairTag};
          background-image: ${`url('src/assets/Icons/Note_WheelChair.svg')`};
        `;
      case "babyseat":
        return css`
          background-color: ${({ theme }) => theme.colors.components.tags.highchairTag};
          background-image: ${`url('src/assets/Icons/Baby.svg')`};
        `;
      default:
        return css``;
    }
  }}
`;

export default Tag;
