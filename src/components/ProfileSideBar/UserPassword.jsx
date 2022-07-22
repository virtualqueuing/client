import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import {
  AttributeLabelName,
  AttributeWrapper,
  PropertyWrapper,
  UserInfoAttribute,
} from "./ProfileInfoProperty";
import { DetailsForm, DetailsInfoContainer, Title, UserDetailsContainer } from "./UserDetails";

const UserPasswordContainer = styled(UserDetailsContainer)`
  height: 254px;
`;

const PasswordForm = styled(DetailsForm)`
  height: auto;
  display: block;
`;

const PasswordAttributeLabelName = styled(AttributeLabelName)`
  width: 110px;
`;

const UserPassword = ({ disabled }) => {
  return (
    <UserPasswordContainer>
      <Title>Change Password</Title>
      <DetailsInfoContainer>
        <PasswordForm>
          <PropertyWrapper>
            <AttributeWrapper>
              <PasswordAttributeLabelName htmlFor="Old Password">
                Old Password:
              </PasswordAttributeLabelName>
              <UserInfoAttribute type="text" value="" disabled={disabled} />
            </AttributeWrapper>
            <AttributeWrapper>
              <PasswordAttributeLabelName htmlFor="New Password">
                New Password:
              </PasswordAttributeLabelName>
              <UserInfoAttribute type="text" value="" disabled={disabled} />
            </AttributeWrapper>
          </PropertyWrapper>
        </PasswordForm>
        <ProfileButton />
      </DetailsInfoContainer>
    </UserPasswordContainer>
  );
};

export default UserPassword;
