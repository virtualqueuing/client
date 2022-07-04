import { AddGuestButton } from "../FunctionButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState, useEffect, useRef } from "react";
import { showNewFormContext } from "../../pages/Context";

const Footer = () => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const addNewRef = useRef(); // close add-new page ouside the popup region

  useEffect(() => {
    const handler = (event) => {
      if (!addNewRef?.current?.contains(event.target)) {
        setShowAddNewForm(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <showNewFormContext.Provider value={{ setShowAddNewForm }}>
      {showAddNewForm && (
        <div ref={addNewRef}>
          <AddNewPage setShowAddNewForm={setShowAddNewForm} />
        </div>
      )}
      <StyledFooter>
        <AddGuestButton onClick={() => setShowAddNewForm(true)}>Add Guest</AddGuestButton>
      </StyledFooter>
    </showNewFormContext.Provider>
  );
};

export default Footer;
