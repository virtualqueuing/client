import styled from "styled-components";
import { useState } from "react";
import {
  LoginContainer,
  LoginInfo,
  LoginInput,
  InputWrapper,
  HidePassword,
  ShowPassword,
  SetAccount,
  LoginButton,
  Logo,
} from "./LoginPage";
import { Branches, Roles } from "../constant";
import ArrowDownIcon from "../assets/Icons/down-arrow-svgrepo-com.svg";

const SignupContainer = styled(LoginContainer)`
  height: 560px;
`;

const SignupButton = styled(LoginButton)`
  margin: 3% 10% 0 10%;
`;

const InputOption = styled.select`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: ${({ theme }) => theme.colors.fonts["inactiveRoute"]} solid 1px;
  font-size: ${({ theme }) => theme.fontSizes["sd"]};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const CustomedInputOptionBG = styled.div`
  background-image: url(${ArrowDownIcon});
  color: ${({ theme }) => theme.colors.fonts["inactiveRoute"]};
  position: absolute;
  width: 15px;
  height: 15px;
  right: 16%;
  top: 53%;
  z-index: 10;
  pointer-events: none;
`;

const SignupPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <SignupContainer>
        <LoginInfo>
          <h2>Agent Sign Up</h2>
          <p>
            Hey, Enter your details to <br /> sign up an new account
          </p>
        </LoginInfo>
        <LoginInput type="text" placeholder="Enter Email" />
        <InputWrapper>
          <InputOption>
            <option value="role" disabled>
              Select a Role
            </option>
            {Roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </InputOption>
          <CustomedInputOptionBG />
        </InputWrapper>
        <InputWrapper>
          <InputOption>
            <option value="branch" disabled>
              Select a Branch
            </option>
            {Branches.map((branch) => (
              <option key={branch}>{branch}</option>
            ))}
          </InputOption>
          <CustomedInputOptionBG />
        </InputWrapper>
        <InputWrapper>
          <LoginInput type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
          {passwordShown ? (
            <HidePassword onClick={togglePassword} />
          ) : (
            <ShowPassword onClick={togglePassword} />
          )}
        </InputWrapper>
        <InputWrapper>
          <LoginInput type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
          {passwordShown ? (
            <HidePassword onClick={togglePassword} />
          ) : (
            <ShowPassword onClick={togglePassword} />
          )}
        </InputWrapper>
        <SetAccount>
          <h6>
            <a href="/login">Already have an account?</a>
          </h6>
        </SetAccount>
        <SignupButton>
          <p>Sign up</p>
        </SignupButton>
        <Logo />
      </SignupContainer>
    </>
  );
};

export default SignupPage;
