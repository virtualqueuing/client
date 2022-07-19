import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from 'styled-components';
import UserDetails from "./UserDetails";
import { UserDetailsContainer, Title, DetailsInfoContainer } from './UserDetails' 

const ProfileContentWrapper = styled(RightMenuContainer)`
    align-items: center;
    justify-content: space-between;
`

const ProfileContent = styled.div`
    width: 970px;
    height: 880px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const UserPasswordContainer = styled(UserDetailsContainer)`
    height: 254px;
`

const ProfileFooter = styled.div`
    width: 100%;
    height: 210px;
    background-color: ${({ theme }) => theme.colors.components.arrivalButton.fontColor.normal};
`

const ProfileSideInfo = () => {
    return (
        <ProfileContentWrapper>
            <ProfileContent>
                <UserDetails />
                <UserPasswordContainer>
                    <Title>Change Password</Title>
                    <DetailsInfoContainer>
                    </DetailsInfoContainer>
                </UserPasswordContainer>
            </ProfileContent>
            <ProfileFooter></ProfileFooter>
        </ProfileContentWrapper>
    )
}

export default ProfileSideInfo
