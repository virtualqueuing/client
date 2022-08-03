import DetailsForm from "./components/DetailsForm.style";
import ProfileButton from "./ProfileButton";
import ProfileInfoProperty from "./components/ProfileInfoProperty";
import { DetailsInfoContainer, Title, UserDetailsContainer } from "./UserDetails";
import { PropertyWrapper } from "./UserDetailsForm";
import { useState } from "react";

const UserPassword = () => {
  const [unEditable, setUnEditable] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <UserDetailsContainer>
      <Title>Change Password</Title>
      <DetailsInfoContainer>
        <DetailsForm onSubmit={handleSubmit}>
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
