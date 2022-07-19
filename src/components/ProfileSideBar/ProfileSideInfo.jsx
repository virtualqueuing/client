import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from 'styled-components';
import { UserAvatar } from '../LeftMenu/LeftMenu';
import UserLine from '../../assets/Icons/Netflix-avatar 1.svg'
import ChangeBtn from '../../assets/Icons/Profile-Vector.svg'

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

const UserDetailsContainer = styled.div`
    height: 432px;
`

const Title = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 500;
`

const DetailsInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
`

const UserAvatarWrapper = styled.div`
    width: auto;
    position: relative;
`

const UploadBtnWrapper = styled.div `
    width: 18px;
    height: 18px;
    border: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4%;
    top: 65%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.components.arrivalButton.fontColor.normal};
`

const UploadBtn = styled.img`
    width: 12px;
    height: 12px;
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
                <UserDetailsContainer>
                    <Title>Personal Details</Title>
                    <DetailsInfoContainer>
                        <UserAvatarWrapper>
                            <UserAvatar src={UserLine} alt="User photo" />
                            <UploadBtnWrapper>
                                <UploadBtn src={ChangeBtn} alt="Upload photo button" />
                            </UploadBtnWrapper>
                        </UserAvatarWrapper>
                    </DetailsInfoContainer>
                </UserDetailsContainer>
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
