import ProfileButton from "./ProfileButton";
import {
  AttributeLabelName,
  AttributeWrapper,
  PropertyWrapper,
  UserInfoAttribute,
} from "./ProfileInfoProperty";
import { DetailsForm, DetailsInfoContainer, Title, UserDetailsContainer } from "./UserDetails";

const UserPassword = ({ disabled }) => {
  return (
    <UserDetailsContainer>
      <Title>Change Password</Title>
      <DetailsInfoContainer>
        <DetailsForm>
          <PropertyWrapper>
            <AttributeWrapper>
              <AttributeLabelName htmlFor="Old Password">Old Password:</AttributeLabelName>
              <UserInfoAttribute type="text" value="" disabled={disabled} />
            </AttributeWrapper>
            <AttributeWrapper>
              <AttributeLabelName htmlFor="New Password">New Password:</AttributeLabelName>
              <UserInfoAttribute type="text" value="" disabled={disabled} />
            </AttributeWrapper>
          </PropertyWrapper>
        </DetailsForm>
        <ProfileButton />
      </DetailsInfoContainer>
    </UserDetailsContainer>
  );
};

export default UserPassword;
