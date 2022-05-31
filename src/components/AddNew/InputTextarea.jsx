import { StyledTextarea } from '../styles/AddNew.styles'
import { useState } from 'react';


const InputTextarea =() => {
  const [textArea, setTextarea] = useState("")
  console.log(textArea)

    return <> 
        <StyledTextarea htmlFor="other">Others:</StyledTextarea>
        <textarea name="other" rows="8" 
          setTextarea={setTextarea}
          onChange={e=>setTextarea(e.target.value)} />
    </>
  ;
};

export default InputTextarea;
