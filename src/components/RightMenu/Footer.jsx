import ConfirmButton from "../ConfirmButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState, useEffect, useRef } from "react";
import { Context } from "../../pages/Context";

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
    <Context.Provider value={{ setShowAddNewForm }}>
      {showAddNewForm && (
        <div ref={addNewRef}>
          <AddNewPage setShowAddNewForm={setShowAddNewForm} />
        </div>
      )}
      <StyledFooter>
        <ConfirmButton
          bg="rgba(230, 0, 18, 0.58)"
          color="#fff"
          fontSize="18px"
          fontWeight="500"
          width="190px"
          onClick={() => setShowAddNewForm(true)}
        >
          Add Guest
        </ConfirmButton>
      </StyledFooter>
    </Context.Provider>
  );
};

export default Footer;
