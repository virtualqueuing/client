import styled from "styled-components";
import ConfirmButton from "../ConfirmButton";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ConfirmButton
        bg="rgba(230, 0, 18, 0.58)"
        color="#fff"
        fontSize="18px"
        fontWeight="500"
        width="190px"
      >
        Add Guest
      </ConfirmButton>
    </StyledFooter>
  );
};

export default Footer;
