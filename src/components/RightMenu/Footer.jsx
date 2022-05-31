import ConfirmButton from "../ConfirmButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState } from "react";

const Footer = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <AddNewPage trigger={buttonPopup} setTrigger={true} />
      <StyledFooter>
        <ConfirmButton
          bg="rgba(230, 0, 18, 0.58)"
          color="#fff"
          fontSize="18px"
          fontWeight="500"
          width="190px"
          onClick={() => setButtonPopup(true)}
        >
          Add Guest
        </ConfirmButton>
      </StyledFooter>
    </>
  );
};

export default Footer;
