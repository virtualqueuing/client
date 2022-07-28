import styled from "styled-components";

export const PropertyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AttributeWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AttributeLabelName = styled.label`
  font-size: 18x;
  padding: 0 0 6px 12px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  margin-top: 18px;
`;

export const UserInfoAttribute = styled.input`
  padding-left: 12px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.components.queueContainer.background};
`;

const ProfileInfoProperty = ({ personDetailsArr, disabled }) => {
  return (
    <PropertyWrapper>
      <AttributeWrapper>
        <AttributeLabelName htmlFor={Object.keys(personDetailsArr)[0]}>
          {Object.keys(personDetailsArr)[0]}:
        </AttributeLabelName>
        <UserInfoAttribute
          type="text"
          value={Object.values(personDetailsArr)[0]}
          disabled={disabled}
        />
      </AttributeWrapper>
      <AttributeWrapper>
        <AttributeLabelName htmlFor={Object.keys(personDetailsArr)[1]}>
          {Object.keys(personDetailsArr)[1]}:
        </AttributeLabelName>
        <UserInfoAttribute
          type="text"
          value={Object.values(personDetailsArr)[1]}
          disabled={disabled}
        />
      </AttributeWrapper>
    </PropertyWrapper>
  );
};

export default ProfileInfoProperty;
