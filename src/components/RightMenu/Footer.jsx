import ConfirmButton from "../ConfirmButton";
import { StyledFooter } from "../styles/Footer.styles";

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
