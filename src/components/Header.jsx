import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 40px 0;
  display: flex;

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
