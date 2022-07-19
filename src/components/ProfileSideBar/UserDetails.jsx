import styled from 'styled-components';
import { UserAvatar } from '../LeftMenu/LeftMenu';
import UserLine from '../../assets/Icons/Netflix-avatar 1.svg'
import ChangeBtn from '../../assets/Icons/Profile-Vector.svg'

export const UserDetailsContainer = styled.div`
    height: 432px;
`

export const Title = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 500;
`

export const DetailsInfoContainer = styled.div`
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

const UserDetails = () => {
    return (
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
    )
}

export default UserDetails