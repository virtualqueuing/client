import styled from "styled-components";
import { fontSize, color } from "styled-system";

const Logotext = styled.h1`
  text-align: center;
  margin-bottom: 20px;

  ${fontSize};
  ${color};
`;

const Logo = () => {
  return (
    <Logotext color="white" fontSize="4x">
      Haidilao
    </Logotext>
  );
};

export default Logo;
