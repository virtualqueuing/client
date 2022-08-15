import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserLine from "../assets/Icons/Netflix-avatar 1.svg";
import MenuQueueList from "../assets/Icons/Menu_QueueList.svg";
import DashBoardClock from "../assets/Icons/Menu_Dashboard.svg";
import MenuQueueListInactive from "../assets/Icons/Menu_QueueList-inactive.svg";
import DashBoardClockInactive from "../assets/Icons/Menu_Dashboard-inactive.svg";
import more from "../assets/Icons/More-2-line.svg";
import restaurantIcon from "../assets/restaurant.png";
import Popup from "../components/PopupMenu/PopupMenu";
import { MainAvatar } from "../components/PopupMenu/MainAvatar";
import {
  Background,
  UserPanel,
  UserDetails,
  UserName,
  UserLocation,
  LeftSideBarOptionIcon,
  LeftSideBarOptionContainer,
  LeftSideBarOption,
  LeftSideBarOptionDescription,
  RestaurantPanel,
  RestaurantLogo,
  MoreButton,
} from "../components/LeftMenu/LeftMenu";
import { UserContext } from "../pages/Context";

const LeftSideNavbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [queueListSrc, setQueueListSrc] = useState(MenuQueueListInactive);
  const [dashboardSrc, setDashboardSrc] = useState(DashBoardClockInactive);

  const popupMenu = useRef(null);

  const navigateToMainQueues = () => {
    navigate("/");
  };

  const navigateToDashBoard = () => {
    navigate("/dashboard");
  };

  const handleShowPopup = () => {
    setShowPopupMenu(!showPopupMenu);
  };

  const clickOutsidePopup = (e) => {
    if (popupMenu.current && showPopupMenu && !popupMenu.current.contains(e.target)) {
      setShowPopupMenu(false);
    }
  };

  document.addEventListener("mousedown", clickOutsidePopup);

  return (
    <Background>
      <RestaurantPanel>
        <RestaurantLogo src={restaurantIcon} alt="Restaurant Icon" />
        <UserDetails>
          <UserName>Lucia&apos;s Dininig</UserName>
          <UserLocation>{user.data.data.branch}</UserLocation>
        </UserDetails>
      </RestaurantPanel>
      <LeftSideBarOptionContainer>
        <LeftSideBarOption
          onClick={navigateToMainQueues}
          onMouseEnter={() => {
            setQueueListSrc(MenuQueueList);
          }}
          onMouseLeave={() => {
            setQueueListSrc(MenuQueueListInactive);
          }}
        >
          <LeftSideBarOptionIcon src={queueListSrc} alt="Queue List Icon" />
          <LeftSideBarOptionDescription>Queue List</LeftSideBarOptionDescription>
        </LeftSideBarOption>
        {user.data.data.role === "Manager" && (
          <LeftSideBarOption
            onClick={navigateToDashBoard}
            onMouseEnter={() => {
              setDashboardSrc(DashBoardClock);
            }}
            onMouseLeave={() => {
              setDashboardSrc(DashBoardClockInactive);
            }}
          >
            <LeftSideBarOptionIcon src={dashboardSrc} alt="Dashboard Icon" />
            <LeftSideBarOptionDescription>Dashboard</LeftSideBarOptionDescription>
          </LeftSideBarOption>
        )}
      </LeftSideBarOptionContainer>
      <UserPanel>
        <MainAvatar src={UserLine} alt="User photo" />
        <UserName>{user.data.data.fullName}</UserName>
        <MoreButton src={more} alt="more button" onClick={handleShowPopup} />
        <Popup openPopup={showPopupMenu} reference={popupMenu} />
      </UserPanel>
    </Background>
  );
};

export default LeftSideNavbar;
