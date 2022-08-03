import styled from "styled-components";

export const AttributeWrapper = styled.div`
  width: 100%;
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

const CustomerInputSelectBg = styled.div`
  ::after {
    content: "";
    background-image: ${`url('src/assets/Icons/down-arrow-svgrepo-com.svg')`};
    width: 15px;
    height: 15px;
    right: 15px;
    top: 22px;
    position: absolute;
    pointer-events: none;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;

  width: 100%;
  & > div {
    width: 100%;
    position: relative;
  }
`;

const ProfileInfoPropertySelect = ({ label, children }) => {
  return (
    <AttributeWrapper>
      <AttributeLabelName htmlFor={label}>{label}:</AttributeLabelName>
      <SelectWrapper>
        <CustomerInputSelectBg>{children}</CustomerInputSelectBg>
      </SelectWrapper>
    </AttributeWrapper>
  );
};

export default ProfileInfoPropertySelect;
