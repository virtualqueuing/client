import styled from "styled-components";
import { useRef } from "react";
import HomeIntroduction from "../components/MainHomepage/Introduction";
import Advantanges from "../components/MainHomepage/Advantages";
import Footer from "../components/MainHomepage/MainPageFooter";
import Aboutus from "../components/MainHomepage/AboutUs";
import Navigation from "../components/MainHomepage/Navigation";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  scroll-behavior: smooth;
`;

const MainHomepage = () => {
  const ref = useRef(null);

  const scrollToSection = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <HomePageContainer>
      <Navigation scrollToSection={scrollToSection} />
      <HomeIntroduction />
      <Advantanges />
      <Aboutus ref={ref} />
      <Footer />
    </HomePageContainer>
  );
};

export default MainHomepage;
