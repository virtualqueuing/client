import { AddGuestButton } from "../FunctionButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState } from "react";
import { showNewFormContext } from "../../pages/Context";

const buttonVariants = {
  before: { y: "100vh" },
  after: {
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 30,
      damping: 8,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px, 0px, 8px, rgb(255,255,255)",
    transition: {
      yoyo: 10,
    },
  },
};

const Footer = () => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  return (
    <showNewFormContext.Provider value={{ setShowAddNewForm }}>
      {showAddNewForm && <AddNewPage setShowAddNewForm={setShowAddNewForm} />}
      <StyledFooter>
        <AddGuestButton
          variants={buttonVariants}
          initial="before"
          animate="after"
          whileHover="hover"
          onClick={() => setShowAddNewForm(true)}
        >
          Add Guest
        </AddGuestButton>
      </StyledFooter>
    </showNewFormContext.Provider>
  );
};

export default Footer;
