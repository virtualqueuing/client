/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { API_URI } from "../constant";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import Logo from "../components/Logo";
import Input from "../components/SingnupSignIn/Input.style";
import SubmitButton from "../components/SingnupSignIn/Button.style";
import InputPassword from "../components/SingnupSignIn/InputPassword";
import emailValidation from "../components/SingnupSignIn/Apps/validation";
import { ErrorMessage, ExsitedEmailMessge } from "../components/SingnupSignIn/ErrorMessage.style";
import { StatusCodes } from "http-status-codes";

export const LoginContainer = styled.div`
  width: 370px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
`;

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
    margin: 30px 0 0 0;
  }
  & p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.fonts["secondary"]};
    margin: 10px 0;
  }
`;

export const SetAccount = styled.div`
  width: 80%;
  margin: 5px 10% 0 10%;
  display: flex;
  justify-content: space-between;
  & h6 {
    font-size: ${({ theme }) => theme.fontSizes["xxxs"]};
    margin: 3% 2% 3% 0;
  }
  & h6:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailPasswordIncorrect, setemailPasswordIncorrect] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    !emailValidation(email) && setEmailError(true);

    try {
      setLoading(true);
      const { data } = await axios.post(`${API_URI}/v1/auth/login`, {
        email,
        password,
      });

      setLoading(false);
      setUser((prev) => ({
        ...prev,
        data,
      }));
      navigate("/");
    } catch (error) {
      const status = error.request.status;
      if (status === StatusCodes.UNAUTHORIZED) setemailPasswordIncorrect(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginContainer>
        <LoginInfo>
          <h2>Sign in</h2>
          <p>Enter your details to sign in to your account</p>
        </LoginInfo>
        {emailPasswordIncorrect && (
          <ExsitedEmailMessge>Email or password is incorrect!</ExsitedEmailMessge>
        )}
        <Input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {emailError && <ErrorMessage>It should be a valid email address!</ErrorMessage>}
        <InputPassword
          placeholder="Enter Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <SetAccount>
          <h6>Having trouble in sign in?</h6>
          <h6>
            <a href="/signup">Sign up</a>
          </h6>
        </SetAccount>
        <SubmitButton type="submit">
          <p>Sign in</p>
        </SubmitButton>
        <Logo path="/home" alt="logo for redirecting to home page" />
      </LoginContainer>
    </form>
  );
};

export default LoginPage;
