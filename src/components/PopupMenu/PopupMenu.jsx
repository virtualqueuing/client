import styled, { css } from "styled-components";
import logoutIcon from "../../assets/Icons/Logout-box.svg";
import profileIcon from "../../assets/Icons/Profile-line.svg";
import { useContext } from "react";
import { UserContext } from "../../pages/Context";
import { useNavigate } from "react-router-dom";

const PopupMenu = styled.div`
  position: absolute;
  top: -110px;
  right: -160px;
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  border-radius: 10px;
  padding: 10px 10px;
  width: 200px;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translateY(-20px);
          transition: 0.5s ease;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(0);
          transition: 0.5s ease;
        `};
`;

const PopupMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  list-style: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const ActionButton = styled.img`
  margin: 0 10px;
`;

const Popup = (props) => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser({ data: null });
  };

  const handleUserProfile = () => {
    navigate("/profile");
  };

  return (
    <PopupMenu isOpen={props.openPopup} ref={props.reference}>
      <ul style={{ padding: "0" }}>
        <PopupMenuItem onClick={handleUserProfile}>
          <ActionButton src={profileIcon} alt="profile icon" />
          Profile
        </PopupMenuItem>
        <PopupMenuItem onClick={handleSignOut}>
          <ActionButton src={logoutIcon} alt="logout button" />
          Sign Out
        </PopupMenuItem>
      </ul>
    </PopupMenu>
  );
};

export default Popup;
