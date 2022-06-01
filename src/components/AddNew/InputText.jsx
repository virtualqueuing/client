import { StyledInputText } from "../styles/AddNew.styles";
// import { useState } from "react";

const InputText = () => {
  // const [text, setText ] = useState("")
  // console.log(text)

  return (
    <>
      <StyledInputText type="text" name="name" placeholder="Name:" />
        {/* setTextarea={setText}
        onChange={e=>setText(e.target.value)} /> */}
      <StyledInputText type="text" name="phone" placeholder="Phone:" />
        {/* setTextarea={setText}
        onChange={e=>setText(e.target.value)} /> */}
    </>
  );
};

export default InputText;
