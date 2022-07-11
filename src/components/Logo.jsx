import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo-v5.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 60px;
  margin: 3% 0;
`;

const Logo = ({ path, alt, style }) => {
  return (
    <Wrapper>
      <Link to={path}>
        <LogoImage style={style} src={logo} alt={alt} />
      </Link>
    </Wrapper>
  );
};

export default Logo;
