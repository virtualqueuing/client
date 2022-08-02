import DetailsForm from "./components/DetailsForm.style";
import ProfileButton from "./ProfileButton";
import ProfileInfoProperty from "./components/ProfileInfoProperty";
import { DetailsInfoContainer, Title, UserDetailsContainer } from "./UserDetails";
import { PropertyWrapper } from "./UserDetailsForm";
import { useState } from "react";

const UserPassword = () => {
  const [unEditable, setUnEditable] = useState(true);

  return (
    <UserDetailsContainer>
      <Title>Change Password</Title>
      <DetailsInfoContainer>
        <DetailsForm>
          <PropertyWrapper>
            <ProfileInfoProperty label="Old Password" disabled={unEditable} />
            <ProfileInfoProperty label="New Password" disabled={unEditable} />
          </PropertyWrapper>
          <ProfileButton onClick={() => setUnEditable(false)} />
        </DetailsForm>
      </DetailsInfoContainer>
    </UserDetailsContainer>
  );
};

export default UserPassword;
