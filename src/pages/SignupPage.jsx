/* eslint-disable no-unused-vars */
import styled from "styled-components";
import logo from "../assets/Logo-v5.svg";
import { useState, useContext } from "react";
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
  Footer,
} from "./LoginPage";
import { Branches, InputValidation, Roles } from "../constant";
import ArrowDownIcon from "../assets/Icons/down-arrow-svgrepo-com.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URI } from "../constant";
import { UserContext } from "./Context";
import validator from "validator";

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

const ErrorMessage = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes["xxs"]};
  padding: 4px 10px;
  margin: 0 10%;
`;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [roleError, setroleError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validator.isEmail(email)) setEmailError(true);
    userName.length < 3 && setUsernameError(true);
    !role && setroleError(true);
    !branch && setBranchError(true);
    password.length < 6 && setPasswordError(true);

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      try {
        setLoading(true);
        const { data } = await axios.post(`${API_URI}/v1/auth/register`, {
          email,
          userName,
          role,
          branch,
          password,
        });
        setLoading(false);
        setUser((prev) => ({
          ...prev,
          data,
        }));
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginInfo>
          <h2>Sign Up</h2>
          <p>Enter your details below to sign up.</p>
        </LoginInfo>
        <form onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {emailError && <ErrorMessage>{InputValidation[0].errorMessage}</ErrorMessage>}
          <LoginInput
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          {usernameError && <ErrorMessage>{InputValidation[1].errorMessage}</ErrorMessage>}
          <InputWrapper>
            <InputOption value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="role">Select a Role</option>
              {Roles.map((role) => (
                <option key={role} value={Roles.value}>
                  {role}
                </option>
              ))}
            </InputOption>
            <CustomedInputOptionBG />
          </InputWrapper>
          {roleError && <ErrorMessage>{InputValidation[2].errorMessage}</ErrorMessage>}
          <InputWrapper>
            <InputOption value={branch} onChange={(event) => setBranch(event.target.value)}>
              <option value="branch">Select a Branch</option>
              {Branches.map((branch) => (
                <option key={branch} value={Branches.value}>
                  {branch}
                </option>
              ))}
            </InputOption>
            <CustomedInputOptionBG />
          </InputWrapper>
          {branchError && <ErrorMessage>{InputValidation[3].errorMessage}</ErrorMessage>}
          <InputWrapper>
            <LoginInput
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordShown ? (
              <HidePassword onClick={togglePassword} />
            ) : (
              <ShowPassword onClick={togglePassword} />
            )}
          </InputWrapper>
          {passwordError && <ErrorMessage>{InputValidation[4].errorMessage}</ErrorMessage>}
          <InputWrapper>
            <LoginInput
              type={passwordShown ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setconfirmPassword(event.target.value)}
            />
            {passwordShown ? (
              <HidePassword onClick={togglePassword} />
            ) : (
              <ShowPassword onClick={togglePassword} />
            )}
          </InputWrapper>
          {confirmPasswordError && <ErrorMessage>{InputValidation[5].errorMessage}</ErrorMessage>}
          <SetAccount>
            <h6>
              <a href="/login">Already have an account?</a>
            </h6>
          </SetAccount>
          <SignupButton type="submit">
            <p>Sign up</p>
          </SignupButton>
        </form>
        <Footer>
          <Link to="/home">
            <Logo src={logo} alt="logo for redirecting to home page" />
          </Link>
        </Footer>
      </LoginContainer>
    </>
  );
};

export default SignupPage;
