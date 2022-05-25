import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  height: 27%;
  flex-direction: column;
  & > h1 {
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Testing</h1>
    </StyledHeader>
  );
};

export default Header;
