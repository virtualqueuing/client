import FunctionButton from "../FunctionButton";
import { StyledFooter } from "../styles/Footer.styles";
import AddNewPage from "../../pages/AddNewPage";
import { useState, useEffect, useRef } from "react";
import { Context } from "../../pages/Context";
import theme from "../../theme";

const Footer = () => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const addNewRef = useRef(); // close add-new page ouside the popup region

  useEffect(() => {
    const handler = (event) => {
      console.log(addNewRef);
      console.log(event.target);
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
        <FunctionButton
          bg={theme.colors.page.main}
          color="#fff"
          fontSize="30px"
          fontWeight="500"
          width="250px"
          borderRadius="20px"
          onClick={() => setShowAddNewForm(true)}
        >
          Add Guest
        </FunctionButton>
      </StyledFooter>
    </Context.Provider>
  );
};

export default Footer;
