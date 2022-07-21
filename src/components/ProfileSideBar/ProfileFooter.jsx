import styled from 'styled-components'
import { motion } from "framer-motion";
import { buttonVariants } from '../RightMenu/Footer'


const ProfileFooterContainer = styled(motion.div)`
width: 100%;
height: 210px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.components.arrivalButton.borderColor.normal};
`

const FooterContent = styled.p`
    color: ${({ theme }) => theme.colors.components.profileButton.fontColor};
`

const ProfileFooter = () => {
    return (
        <ProfileFooterContainer variants={buttonVariants} initial="before" animate="after">
            <FooterContent>Copyright &copy;2022 Hard to Beat</FooterContent>
        </ProfileFooterContainer>
    )
}

export default ProfileFooter