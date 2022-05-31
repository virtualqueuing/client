import { StyledInputText } from "../styles/AddNew.styles";
import { useState } from "react";

const InputText = () => {
    const [text, setText] = useState("")
    console.log(text)
  return (
    <>
      <StyledInputText type="text" name="name" placeholder="Name:"
      setText={setText}
      onChange={e=>setText(e.target.value)} />
      <StyledInputText type="text" name="phone" placeholder="Phone:" 
      setText={setText}
      onChange={e=>setText(e.target.value)}  />
    </>
  );
};

export default InputText;
