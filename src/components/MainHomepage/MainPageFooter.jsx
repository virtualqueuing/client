import styled from "styled-components";
import FlexDisplay from "./FlexDisplay";

const HomeFooter = styled(FlexDisplay)`
  width: 100vw;
  color: #fff;
  background-color: #5d5670;
  padding: 10px;
`;

const FooterContent = styled.div`
  width: 50%;
  color: ${(props) => props.theme.colors.fonts.inactiveRoute};
`;

const Footer = () => (
  <HomeFooter>
    <FooterContent></FooterContent>
    <p>Copyright &copy;2022 Hard to Beat</p>
  </HomeFooter>
);

export default Footer;
