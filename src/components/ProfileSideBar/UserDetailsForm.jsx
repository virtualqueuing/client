import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../pages/Context";
import ProfileInfoProperty from "./components/ProfileInfoProperty";
import DetailsForm from "./components/DetailsForm.style";
import ProfileInfoPropertySelect from "./components/ProfileInfoPropertSelect";
import { useState } from "react";
import updateUserApi from "../../apis/updateUserApi";
import ProfileButton from "./ProfileButton";
import { Branches, Roles } from "../../constant";

export const PropertyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20%;
  margin-top: 10px;
`;

const UserInfoSelectAttribute = styled.select`
  padding-left: 12px;
  height: 55px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.components.queueContainer.background};
  position: relative;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
`;

const UserDetailsForm = () => {
  const { user, setUser } = useContext(UserContext);
  const { fullName, email, role, branch } = user.data.data;

  const [updateFullName, setUpdateFullName] = useState(fullName);
  const [updateEmail, setUpdateEmail] = useState(email);
  const [updateRole, setUpdateRole] = useState();
  const [updateBranch, setUpdateBranch] = useState();

  const [unEditable, setUnEditable] = useState(true);

  const handleSubmit = async () => {
    const updateInfo = {
      fullName: updateFullName,
      email: updateEmail,
      role: updateRole,
      branch: updateBranch,
    };
    const data = await updateUserApi(user.data.data._id, updateInfo);
    setUser((prevData) => ({
      ...prevData,
      data,
    }));
  };

  return (
    <DetailsForm onSubmit={handleSubmit}>
      <PropertyWrapper>
        <ProfileInfoProperty
          label="User Name"
          defaultValue={updateFullName}
          value={updateFullName}
          onChange={(event) => setUpdateFullName(event.target.value)}
          disabled={unEditable}
        />
        <ProfileInfoProperty
          label="Email"
          defaultValue={updateEmail}
          value={updateEmail}
          onChange={(event) => setUpdateEmail(event.target.value)}
          disabled={unEditable}
        />
      </PropertyWrapper>
      <PropertyWrapper>
        <ProfileInfoPropertySelect label="Role">
          <UserInfoSelectAttribute
            defaultValue={role}
            value={updateRole}
            onChange={(event) => setUpdateRole(event.target.value)}
            disabled={unEditable}
          >
            {Roles.map((newRole) => (
              <option key={newRole}>{newRole}</option>
            ))}
          </UserInfoSelectAttribute>
        </ProfileInfoPropertySelect>
        <ProfileInfoPropertySelect label="Branch">
          <UserInfoSelectAttribute
            defaultValue={branch}
            value={updateBranch}
            onChange={(event) => setUpdateBranch(event.target.value)}
            disabled={unEditable}
          >
            {Branches.map((newBranch) => (
              <option key={newBranch}>{newBranch}</option>
            ))}
          </UserInfoSelectAttribute>
        </ProfileInfoPropertySelect>
      </PropertyWrapper>
      <ProfileButton onClick={() => setUnEditable(false)} />
    </DetailsForm>
  );
};

export default UserDetailsForm;
