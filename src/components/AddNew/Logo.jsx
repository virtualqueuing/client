import styled from "styled-components";

const Wrapper = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes["4x"]};
`;

const Logo = () => <Wrapper>Haidilao</Wrapper>;

export default Logo;
