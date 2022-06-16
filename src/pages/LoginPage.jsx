import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/Logo-v5.svg";
import passwordHide from "../assets/Icons/Button_Password-hide.svg";
import passwordHideActive from "../assets/Icons/Button_ShowPassword.svg";
import passwordShow from "../assets/Icons/Button_Password-show.svg";
import passwordShowActive from "../assets/Icons/Button_Password-showActive.svg";

export const LoginContainer = styled.div`
  width:370px;
  height:400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
`

export const LoginInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  & h2 {
    font-size: 20px;
    margin: 35px 0 0 0;
  }
  & p{
    font-size: 15px;
    color: ${({ theme }) => theme.colors.fonts["secondary"]};
    margin: 15px 0;
  }
`

export const LoginInput = styled.input`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: ${({ theme }) => theme.colors.fonts["inactiveRoute"]} solid 1px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.fonts["inactiveRoute"]};
    font-size: ${({ theme }) => theme.fontSizes["xxs"]};
  }
`

export const InputPassword = styled.div`
  display: flex;
  position: relative;
`

export const ShowPassword = styled.div`
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
`

export const HidePassword = styled(ShowPassword)`
  background-image: url(${passwordShow});
  :hover {
    background-image: url(${passwordShowActive});
  }
`

export const SetAccount = styled.div`
  width: 80%;
  margin: 5px 10% 0 10%;
  display: flex;
  justify-content: space-between;
  & h6{
    font-size: ${({ theme }) => theme.fontSizes["xxxs"]};
    margin: 3% 2% 3% 0;
  }
  & h6:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.page["main"]};
  color: #fff;
  & p{
    font-size: ${({ theme }) => theme.fontSizes["lg"]};
    font-weight: 500;
  }
  :hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.components.loginButton["hover"]};
    
  }
`

export const Logo = styled.div`
  width: 120px;
  height: 60px;
  margin: 4% 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${logo});
  background-size: 100% 100%;
`

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <LoginContainer>
        <LoginInfo>
          <h2>Agent Login</h2>
          <p>Hey, Enter your details to get <br /> sign in to your account</p>
        </LoginInfo>
        <LoginInput type="text" placeholder="Enter Email / Phone No" />
        <InputPassword>
          <LoginInput type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
          {passwordShown ? <HidePassword onClick={togglePassword} /> : <ShowPassword onClick={togglePassword} />}
        </InputPassword>
        <SetAccount>
          <h6>Having trouble in sign in?</h6>
          <h6><a href="/signup">Sign up</a></h6>
        </SetAccount>
        <LoginButton>
          <p>Sign in</p>
        </LoginButton>
        <Logo />
      </LoginContainer>
    </>
  )
}

export default LoginPage;
