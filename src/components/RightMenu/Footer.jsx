import { AddGuestButton } from "../FunctionButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState } from "react";
import { showNewFormContext } from "../../pages/Context";

const Footer = () => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  return (
    <showNewFormContext.Provider value={{ setShowAddNewForm }}>
      {showAddNewForm && <AddNewPage setShowAddNewForm={setShowAddNewForm} />}
      <StyledFooter>
        <AddGuestButton onClick={() => setShowAddNewForm(true)}>Add Guest</AddGuestButton>
      </StyledFooter>
    </showNewFormContext.Provider>
  );
};

export default Footer;
