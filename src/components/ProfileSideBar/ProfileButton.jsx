import { useState } from 'react'
import styled from 'styled-components'

const PersonalDetailsBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const PersonalDetailsBtn = styled.button`
    display: block;
    width: 243px;
    height: 55px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.components.loginButton.background};
    border-radius: 15px;
    border: transparent;
    color: ${({ theme }) => theme.colors.components.profileButton.fontColor};
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    &:hover {
    box-shadow: ${({ theme }) => theme.colors.components.queueContainer.background} 0px 20px 30px -10px;
    transform: scale(1.05);
    }
`

const ProfileButton = () => {
    const [btnContent, setBtnContent] = useState("Edit");
    const handleEdit = () => {
        setBtnContent("Save")
    }
    return (
        <PersonalDetailsBtnWrapper onClick={handleEdit}>
            <PersonalDetailsBtn>{btnContent}</PersonalDetailsBtn>
        </PersonalDetailsBtnWrapper>
    )
}

export default ProfileButton