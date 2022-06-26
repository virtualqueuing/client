import styled from "styled-components";
import logo from "../../assets/Logo-v5.svg";

const ButtonColor = "#2EAD7C";

const HomeNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;
  height: 60px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* position: fixed; */
  top: 0;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationButton = styled.button`
  background-color: #fff;
  border: 1px solid ${ButtonColor};
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border-radius: 25px;
  }
  transition: 1s;
  & a {
    text-decoration: none;
  }
`;

const MainHomeLogo = styled.img`
  width: 150px;
  height: auto;
`;

const Navigation = ({ scrollToSection }) => {
  return (
    <HomeNavigation>
      <MainHomeLogo src={logo} alt="logo" />
      <NavigationLinks>
        <NavigationButton style={{ border: "none", paddingRight: 0 }} onClick={scrollToSection}>
          About Us
        </NavigationButton>
        <NavigationButton style={{ backgroundColor: `${ButtonColor}` }}>
          <a href="/signup" style={{ color: "#fff" }}>
            Sign Up
          </a>
        </NavigationButton>
        <NavigationButton>
          <a href="/login" style={{ color: `${ButtonColor}` }}>
            Sign In
          </a>
        </NavigationButton>
      </NavigationLinks>
    </HomeNavigation>
  );
};

export default Navigation;
