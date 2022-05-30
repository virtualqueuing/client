import React from "react";
import styled from "styled-components";
import theme from "../theme";
import loginBackground from "../assets/world-map.png";
import logo from "../assets/Logo.svg";

const LoginContainer = styled.div`
    width: 702px;
    height: 695px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    margin-top: 10%;
    background:url(${loginBackground});
    background-color: rgba(230, 0, 18, 0.65);
    background-size:100% 100%;
`

const LoginLogo = styled.div`
    width: 170px;
    height: 62px;
    & img {
        width: 100%;
        height: 100%;
    }
`

const LoginForm = styled.div`
    width: 430px;
    height: 385px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
`

const SignButtonWrapper = styled.div`
    width: 419px;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SignButton = styled.button`
    border-color: transparent;
    background-color: #fff;
    width: 188px;
    height: 75px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes["1x"]};
`

const VerifyUserWrapper = styled.form`
    width: 419px;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    & [type="text"] {
        background-color: #fff;
        height: 77px;
        border-color: transparent;
    }
    & [type="text"]:focus::placeholder {
        color: transparent;
    }
    & [placeholder="UserID:"]::placeholder {
        font-family: 'Sansita';
        color: rgba(0, 0, 0, 0.75);
        font-size: ${({ theme }) => theme.fontSizes["1x"]};
        font-weight: 700;
        padding-left: 3%;
    }
    & [placeholder="Password:"]::placeholder {
        font-family: 'Sansita';
        color: rgba(0, 0, 0, 0.75);
        font-size: ${({ theme }) => theme.fontSizes["1x"]};
        font-weight: 700;
        padding-left: 3%;
    }
`

const FormBottomWrapper = styled.div`
    width: 419px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    & a {
        text-decoration: none;
        & span {
            color: rgba(255, 255, 255, 0.85);
        }
    }
`

const RememberMe = styled.form`
    width: 180px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & [type="checkbox"] {
        background: rgba(255, 255, 255, 0.9);
        width: 27px;
        height: 26px;
        border-radius: 6px;
    }
    & label {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.85);
    }
`

const LoginButton = styled.button`
    width: 295px;
    height: 78px;
    background: rgba(231, 159, 164, 0.4);
    border: 0px;
    & a {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
    }
`

const LoginPage = () => {
    return (
        <>
            <LoginContainer>
                <LoginLogo>
                    <img src={logo} alt="The logo of login page" />
                </LoginLogo>
                <LoginForm>
                    <SignButtonWrapper>
                        <SignButton>
                            Sign In
                        </SignButton>
                        <SignButton>
                            Sign Up
                        </SignButton>
                    </SignButtonWrapper>
                    <VerifyUserWrapper>
                        <input type="text" placeholder="UserID:"/>
                        <input type="text" placeholder="Password:"/>
                    </VerifyUserWrapper>
                    <FormBottomWrapper>
                        <RememberMe>
                            <input type="checkbox" id="rememberMe"/>
                            <label htmlFor="rememberMe"> Remember Me</label>
                        </RememberMe>
                        <a href="#"><span>Forget Password?</span></a>
                    </FormBottomWrapper>
                </LoginForm>
                <LoginButton><a href="#">Login</a></LoginButton>
            </LoginContainer>
        </>
    )
}

export default LoginPage;