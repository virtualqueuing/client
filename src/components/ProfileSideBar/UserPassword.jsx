import DetailsForm from "./components/DetailsForm.style";
import ProfileButton from "./ProfileButton";
import ProfileInfoProperty from "./components/ProfileInfoProperty";
import { DetailsInfoContainer, Title, UserDetailsContainer } from "./UserDetails";
import { PropertyWrapper } from "./UserDetailsForm";
import { useState } from "react";
import updatePasswordApi from "../../apis/updatePasswordApi";
import { useContext } from "react";
import { UserContext } from "../../pages/Context";
import { StatusCodes } from "http-status-codes";
import { ExsitedEmailMessge } from "../SingnupSignIn/ErrorMessage.style";
import styled from "styled-components";
import { ShowProfileUpdateContext } from "../../context/showProfileUpdateContext";

const PasswordErrorMessage = styled(ExsitedEmailMessge)`
  height: 55px;
  width: 40%;
  margin: auto;
  margin-top: 20px;
  border-radius: 15px;
`;

const UserPassword = () => {
  const { user } = useContext(UserContext);
  const { setShowProfileUpdateModal } = useContext(ShowProfileUpdateContext);

  const [unEditable, setUnEditable] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showPasswordFailedMessage, setShowPasswordFailedMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { status } = await updatePasswordApi(user.data.data._id, {
        password: oldPassword,
        newPassword: newPassword,
      });
      if (status === StatusCodes.OK) setShowProfileUpdateModal(true);
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === StatusCodes.UNAUTHORIZED) setShowPasswordFailedMessage(true);
    }
  };

  return (
    <UserDetailsContainer>
      <Title>Change Password</Title>
      <DetailsInfoContainer>
        <DetailsForm onSubmit={handleSubmit}>
          {showPasswordFailedMessage && (
            <PasswordErrorMessage>Password is incorrect!</PasswordErrorMessage>
          )}
          <PropertyWrapper>
            <ProfileInfoProperty
              label="Old Password"
              disabled={unEditable}
              valuse={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
            <ProfileInfoProperty
              label="New Password"
              disabled={unEditable}
              valuse={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </PropertyWrapper>
          <ProfileButton onClick={() => setUnEditable(false)} />
        </DetailsForm>
      </DetailsInfoContainer>
    </UserDetailsContainer>
  );
};

export default UserPassword;
