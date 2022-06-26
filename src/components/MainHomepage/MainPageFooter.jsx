import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import FlexDisplay from "./FlexDisplay";

const HomeFooter = styled(FlexDisplay)`
  width: 100vw;
  height: auto;
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
    <FooterContent>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa aspernatur minus
        veritatis enim quos fugiat pariatur, amet adipisci. Voluptates suscipit at sapiente minus
        sunt in officiis animi error iure?
      </p>
    </FooterContent>
    <p>Copyright &copy;2022 Hard to Beat</p>
  </HomeFooter>
);

export default Footer;
