import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import MenuQueueList from "../../assets/Icons/Menu_QueueList.svg";
import DashBoardClock from "../../assets/Icons/Menu_Dashboard.svg";
import { QUEUE_STATUS, NoteIcon } from "../../constant";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";
import { MainAvatar } from "../PopupMenu/MainAvatar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Context";
import { ManagerContext } from "../../context/ManagerContext";
import isEmpty from "lodash/isEmpty";
import { motion } from "framer-motion";
import more from "../../assets/Icons/More-2-line.svg";
import restaurantIcon from "../../assets/restaurant.png";
import Popup from "../../components/PopupMenu/PopupMenu";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 3%;
  max-width: 280px;
  height: 100vh;
  padding: 40px 0px;
`;

export const RestaurantPanel = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: relative;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-start;
  @media (max-width: 1500px) {
    padding-right: 40px;
  }
`;

export const UserPanel = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: relative;
  align-items: center;
  padding: 0 10px;
  margin-top: auto;
  justify-content: space-around;
  @media (max-width: 1500px) {
    padding-right: 40px;
  }
`;

export const RestaurantLogo = styled.img`
  width: auto;
  margin-left: 10px;
  height: 52px;
`;

export const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 20px;
  cursor: auto;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 45px;
`;

export const UserName = styled.h5`
  padding: 0;
  margin: 0 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const UserLocation = styled.span`
  margin: 0 20px;
  font-size: 14px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.fonts.secondary};
  @media (max-width: 1500px) {
    font-size: 0.8rem;
  }
`;

export const MoreButton = styled.img`
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
  @media (max-width: 1500px) {
    margin-right: -26px;
  }
`;

export const LeftSideBarOptionContainer = styled.div`
  padding-bottom: 90px;
  @media (max-width: 1500px) {
    padding-bottom: 0;
  }
`;

export const LeftSideBarOption = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 3%;
  position: relative;
  padding: 0 20px;
  cursor: pointer;

  &::before {
    content: "";
    background-color: #c8c8c8;
    height: 48px;
    border-radius: 10px;
    position: absolute;
    left: 14px;
    transition: all 0.3s ease-in-out;
  }
  &:hover::before {
    width: 90%;
  }
  &:hover span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.fonts.activeRoute};
  }
  @media (max-width: 1500px) {
    width: auto;
    height: 40px;
    &::before {
      height: 38px;
      left: 10px;
    }
    &:hover::before {
      width: 90%;
    }
  }
`;

export const LeftSideBarOptionIcon = styled.img`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  &:hover {
    color: ${({ theme }) => theme.colors.fonts.activeRoute};
  }
  @media (max-width: 1500px) {
    width: 20px;
    height: 20px;
  }
`;

export const LeftSideBarOptionDescription = styled.span`
  font-size: 25px;
  padding: 0 5px;
  position: relative;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  transition: all 0.3s ease-in-out;
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

const CurrentQueueDetailsContainer = styled(motion.div)`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  @media (max-width: 1500px) {
    height: 100px;
  }
`;

const CurrentQueueDetailTitle = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fonts.inactiveMenu};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

const CurrentQueueNumberAndName = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #edf4f4;
`;

const HeadNumber = styled.div`
  color: ${({ theme }) => theme.colors.fonts.secondary};
  width: auto;
  padding: 10%;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  @media (max-width: 1500px) {
    font-size: 1.2rem;
  }
`;

const CurrentQueueBar = styled.div`
  width: 1%;
  height: 70%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
`;

const HeadCustomerName = styled.div`
  color: ${({ theme }) => theme.colors.fonts.secondary};
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  @media (max-width: 1500px) {
    font-size: 1.2rem;
  }
`;

const SingleQueueNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: space-between;
  align-items: flex-start;
`;

const SingleQueueNotes = styled(motion.div)`
  width: 90%;
  height: auto;
  max-width: 13vw;
  display: flex;
  align-items: center;
  justify-content: left;
  /* background: ${({ theme }) =>
    theme.colors.components.tags.HovertagColorList[Math.floor(Math.random() * 6)]}; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  overflow: hidden;
  box-sizing: content-box;
`;

const HovertagColorList = [
  "#c4f1e7",
  "#ecf5db",
  "#ffeec9",
  "#fcc4bc",
  "#eaddf0",
  "#daf4eb",
  "#E2F0CB",
];

export const SingleQueueIcon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 1500px) {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const SingleQueueDescription = styled.span`
  font-size: 25px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.fonts.secondary};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

const sideMenuAnimation = {
  before: {
    x: "-100vw",
    opacity: 0,
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      damping: 8,
      stiffness: 30,
    },
  },
};

const LeftMenu = ({ leftQueues, tableType, queueStatus }) => {
  let headCustomer = [];
  if (!isEmpty(leftQueues)) {
    headCustomer =
      tableType === "Table Type"
        ? leftQueues.find((queue) => queue.status === QUEUE_STATUS.WAITING)
        : leftQueues.find(
            (queue) => queue.status === QUEUE_STATUS.WAITING && queue.tableSize === tableType
          );
  }
  const queueHeadCustomerName = headCustomer?.name;
  const queueHeadNumber = headCustomer?.queueNumber;
  const queueHeadTableType = headCustomer?.tableSize;

  const [showPopupMenu, setShowPopupMenu] = useState(false);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { manager, setManager } = useContext(ManagerContext);

  const popupMenu = useRef(null);

  useEffect(() => {
    const roleState = user.data.data.role;
    if (roleState === "Manager") setManager(true);
  }, []);

  const navigateToDashboard = () => {
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
        <LeftSideBarOption>
          <LeftSideBarOptionIcon src={MenuQueueList} alt="Queue List Icon" />
          <LeftSideBarOptionDescription>Queue List</LeftSideBarOptionDescription>
        </LeftSideBarOption>
        {manager && (
          <LeftSideBarOption onClick={navigateToDashboard}>
            <LeftSideBarOptionIcon src={DashBoardClock} alt="Dashboard Icon" />
            <LeftSideBarOptionDescription>Dashboard</LeftSideBarOptionDescription>
          </LeftSideBarOption>
        )}
      </LeftSideBarOptionContainer>
      <CurrentQueueDetailsContainer variants={sideMenuAnimation} initial="before" animate="after">
        <CurrentQueueDetailTitle>
          Next Customer
          <br />*{queueHeadTableType} table*
        </CurrentQueueDetailTitle>
        <CurrentQueueNumberAndName>
          <HeadNumber>{queueHeadNumber}</HeadNumber>
          <CurrentQueueBar></CurrentQueueBar>
          <HeadCustomerName>{queueHeadCustomerName}</HeadCustomerName>
        </CurrentQueueNumberAndName>
      </CurrentQueueDetailsContainer>
      <SingleQueueNotesContainer>
        <CurrentQueueDetailTitle>Notes:</CurrentQueueDetailTitle>
        {tableType === "Table Type"
          ? leftQueues
              .find((queue) => queue.status === QUEUE_STATUS.WAITING)
              ?.notes[0]?.split(",")
              .map((note, index) => (
                <SingleQueueNotes
                  style={{ background: `${HovertagColorList[index]}` }}
                  variants={sideMenuAnimation}
                  initial="before"
                  animate="after"
                  key={index}
                >
                  {note === "Birthday" ? (
                    <SingleQueueIcon src={NoteIcon.Birthday} alt={`${note} icon`} />
                  ) : note === "Wheelchair" ? (
                    <SingleQueueIcon src={NoteIcon.Wheelchair} alt={`${note} icon`} />
                  ) : note === "Highchair" ? (
                    <SingleQueueIcon src={NoteIcon.Highchair} alt={`${note} icon`} />
                  ) : null}
                  <SingleQueueDescription>{note}</SingleQueueDescription>
                </SingleQueueNotes>
              ))
          : leftQueues
              .find(
                (queue) => queue.status === QUEUE_STATUS.WAITING && queue.tableSize === tableType
              )
              ?.notes[0]?.split(",")
              .map((note, index) => (
                <SingleQueueNotes
                  style={{ background: `${HovertagColorList[index]}` }}
                  variants={sideMenuAnimation}
                  initial="before"
                  animate="after"
                  key={index}
                >
                  {note === "Birthday" ? (
                    <SingleQueueIcon src={NoteIcon.Birthday} alt={`${note} icon`} />
                  ) : note === "Wheelchair" ? (
                    <SingleQueueIcon src={NoteIcon.Wheelchair} alt={`${note} icon`} />
                  ) : note === "Highchair" ? (
                    <SingleQueueIcon src={NoteIcon.Highchair} alt={`${note} icon`} />
                  ) : null}
                  <SingleQueueDescription>{note}</SingleQueueDescription>
                </SingleQueueNotes>
              ))}
      </SingleQueueNotesContainer>
      <UserPanel>
        <MainAvatar src={UserLine} alt="User photo" />
        <UserName>{user.data.data.fullName}</UserName>
        <MoreButton src={more} alt="more button" onClick={handleShowPopup} />
        <Popup openPopup={showPopupMenu} reference={popupMenu} />
      </UserPanel>
    </Background>
  );
};

export default LeftMenu;
