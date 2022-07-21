import { useState, useContext } from "react";
import { LoginContainer, LoginInfo, SetAccount } from "./LoginPage";
import { Branches, Roles } from "../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../constant";
import { UserContext } from "./Context";
import Logo from "../components/Logo";
import Input from "../components/SingnupSignIn/Input.style";
import SubmitButton from "../components/SingnupSignIn/Button.style";
import InputOption from "../components/SingnupSignIn/InputOption";
import InputPassword from "../components/SingnupSignIn/InputPassword";
import { ErrorMessage, ExsitedEmailMessge } from "../components/SingnupSignIn/ErrorMessage.style";
import emailValidation from "../components/SingnupSignIn/Apps/validation";
import { StatusCodes } from "http-status-codes";

const USER_NAME_VALID_MIN = 3;
const PASSWORD_VALID_MAX = 6;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
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
  const [exsitedEmail, setExsitedEmail] = useState(false);

  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    !emailValidation(email) && setEmailError(true);
    fullName.length < USER_NAME_VALID_MIN && setUsernameError(true);
    !role && setroleError(true);
    !branch && setBranchError(true);
    password.length < PASSWORD_VALID_MAX && setPasswordError(true);

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      try {
        setLoading(true);
        const { data } = await axios.post(`${API_URI}/v1/auth/register`, {
          email,
          fullName,
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
        const status = error.request.status;
        if (status === StatusCodes.BAD_REQUEST || StatusCodes.INTERNAL_SERVER_ERROR)
          setExsitedEmail(true);
        setLoading(false);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginInfo>
        <h2>Sign Up</h2>
        <p>Enter your details below to sign up.</p>
      </LoginInfo>
      <form onSubmit={handleSubmit}>
        {exsitedEmail && <ExsitedEmailMessge>This email is already being used!</ExsitedEmailMessge>}
        <Input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {emailError && <ErrorMessage>It should be a valid email address!</ErrorMessage>}
        <Input
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        {usernameError && (
          <ErrorMessage>
            Full name should be 3-40 characters and should not include any special character!
          </ErrorMessage>
        )}
        <InputOption value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="role">Select a Role</option>
          {Roles.map((role) => (
            <option key={role} value={Roles.value}>
              {role}
            </option>
          ))}
        </InputOption>
        {roleError && <ErrorMessage>Please choose a role!</ErrorMessage>}
        <InputOption value={branch} onChange={(event) => setBranch(event.target.value)}>
          <option value="branch">Select a Branch</option>
          {Branches.map((branch) => (
            <option key={branch} value={Branches.value}>
              {branch}
            </option>
          ))}
        </InputOption>
        {branchError && <ErrorMessage>Please choose a Branch!</ErrorMessage>}
        <InputPassword
          placeholder="Enter Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {passwordError && <ErrorMessage>Password should be 6-20 characters!</ErrorMessage>}
        <InputPassword
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            setconfirmPassword(event.target.value);
          }}
        />
        {confirmPasswordError && <ErrorMessage>Password Does not match!</ErrorMessage>}
        <SetAccount>
          <h6>
            <a href="/login">Already have an account?</a>
          </h6>
        </SetAccount>
        <SubmitButton type="submit" style={{ margin: "3% 10% 0 10%" }}>
          <p>Sign up</p>
        </SubmitButton>
      </form>
      <Logo logoSize="small" path="/home" alt="logo for redirecting to home page" />
    </LoginContainer>
  );
};

export default SignupPage;
