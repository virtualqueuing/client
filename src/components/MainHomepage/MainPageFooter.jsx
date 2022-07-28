import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import FlexDisplay from "./FlexDisplay";

const HomeFooter = styled(FlexDisplay)`
  width: 100vw;
  color: #fff;
  background-color: #5d5670;
  padding-bottom: 20px;
`;

const FooterContent = styled.div`
  width: 50%;
  color: ${(props) => props.theme.colors.fonts.inactiveRoute};
`;

const Footer = () => (
  <HomeFooter>
    <SectionTitle style={{ color: "#fff" }}>Virtual Queuing</SectionTitle>
    <FooterContent></FooterContent>
    <p>Copyright &copy;2022 Hard to Beat</p>
  </HomeFooter>
);

export default Footer;
