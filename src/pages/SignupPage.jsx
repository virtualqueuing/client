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
  Footer,
} from "./LoginPage";
import { Branches, Roles } from "../constant";
import ArrowDownIcon from "../assets/Icons/down-arrow-svgrepo-com.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../constant";

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

const SignupPage = ({ authenticated }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!authenticated) {
      axios
        .post(`${API_URI}/v1/auth/register`, {
          email,
          userName,
          role,
          branch,
          password,
          confirmPassword,
        })
        .then((res) => {
          const jwt = res.headers["x-auth-token"];
          localStorage.setItem("authToken", jwt);
        })
        .then(() => navigate("/"));
      return;
    }
  };

  return (
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
          onChange={(event) => setEmail(event.target.value)}
        />
        <LoginInput
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
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
        <a href="/home">
          <Logo />
        </a>
      </Footer>
    </LoginContainer>
  );
};

export default SignupPage;
