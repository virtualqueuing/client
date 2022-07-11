import styled from "styled-components";
import passwordHide from "../../assets/Icons/Button_Password-hide.svg";
import passwordHideActive from "../../assets/Icons/Button_ShowPassword.svg";
import passwordShow from "../../assets/Icons/Button_Password-show.svg";
import passwordShowActive from "../../assets/Icons/Button_Password-showActive.svg";
import Input from "./Input.style";
import { useState } from "react";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const ShowPassword = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  background-image: url(${passwordHide});
  background-size: 100% 100%;
  right: 15%;
  top: 50%;
  :hover {
    background-image: url(${passwordHideActive});
    cursor: pointer;
  }
`;

const HidePassword = styled(ShowPassword)`
  background-image: url(${passwordShow});
  :hover {
    background-image: url(${passwordShowActive});
  }
`;

const InputPassword = ({ placeholder, value, onChange }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Wrapper>
      <Input
        type={passwordShown ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {passwordShown ? (
        <HidePassword onClick={togglePassword} />
      ) : (
        <ShowPassword onClick={togglePassword} />
      )}
    </Wrapper>
  );
};

export default InputPassword;
