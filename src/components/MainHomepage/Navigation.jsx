import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import Logo from "../Logo";
import { UserContext } from "../../pages/Context";

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

const Navigation = ({ scrollToSection }) => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext)

  return (
    <HomeNavigation>
      <Logo style={{ width: "150px" }} path="/" alt="logo for redirecting to main page" />
      <NavigationLinks>
        <NavigationButton style={{ border: "none", paddingRight: 0 }} onClick={scrollToSection}>
          About Us
        </NavigationButton>
        {user.data ? (
          <NavigationButton
            onClick={() => navigate("/")}
            style={{ backgroundColor: `${ButtonColor}`, color: "#fff" }}
          >
            View Queues
          </NavigationButton>) : (
          <>
            <NavigationButton
              onClick={() => navigate("/signup")}
              style={{ backgroundColor: `${ButtonColor}`, color: "#fff" }}
            >
              Sign Up
            </NavigationButton>
            <NavigationButton onClick={() => navigate("/login")} style={{ color: `${ButtonColor}` }}>
              Sign In
            </NavigationButton>
          </>
        )}
      </NavigationLinks>
    </HomeNavigation>
  );
};

export default Navigation;
