import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../assets/Logo-v5.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  margin: 3% 0;
  ${({ logoSize }) => {
    switch (logoSize) {
      case "small":
        return css`
          width: 120px;
          height: 60px;
        `;
      case "medium":
        return css`
          width: 150px;
          height: auto;
        `;
      case "large":
        return css`
          width: 180px;
          height: auto;
        `;
      default:
        return css``;
    }
  }}
`;

const Logo = ({ path, alt, logoSize }) => {
  return (
    <Wrapper>
      <Link to={path}>
        <LogoImage logoSize={logoSize} src={logo} alt={alt} />
      </Link>
    </Wrapper>
  );
};

export default Logo;
