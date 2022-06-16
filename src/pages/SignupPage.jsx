import styled from "styled-components";
import { useState } from "react";
import { LoginContainer, LoginInfo, LoginInput, InputPassword, HidePassword, ShowPassword, SetAccount, LoginButton, Logo } from "./LoginPage";

const SignupContainer = styled(LoginContainer)`
    height: 440px;
`

const SignupButton = styled(LoginButton)`
    margin: 3% 10% 0 10%;
`

const SignupPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <>
            <SignupContainer>
                <LoginInfo>
                    <h2>Agent Sign Up</h2>
                    <p>Hey, Enter your details to  <br /> sign up an new account</p>
                </LoginInfo>
                <LoginInput type="text" placeholder="Enter Email / Phone No" />
                <InputPassword>
                    <LoginInput type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
                    {passwordShown ? <HidePassword onClick={togglePassword} /> : <ShowPassword onClick={togglePassword} />}
                </InputPassword>
                <InputPassword>
                    <LoginInput type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
                    {passwordShown ? <HidePassword onClick={togglePassword} /> : <ShowPassword onClick={togglePassword} />}
                </InputPassword>
                <SetAccount>
                    <h6><a href="/login">Already have an account?</a></h6>
                </SetAccount>
                <SignupButton>
                    <p>Sign up</p>
                </SignupButton>
                <Logo />
            </SignupContainer>
        </>
    );
}

export default SignupPage;