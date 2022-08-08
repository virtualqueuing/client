import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import MenuQueueList from "../../assets/Icons/Menu_QueueList.svg";
import DashBoardClock from "../../assets/Icons/Menu_Dashboard.svg";
import { QUEUE_STATUS, NoteIcon } from "../../constant";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";
import ArrowDown from "../../assets/Icons/arrow-down-s-line.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Context";
import { ManagerContext } from "../../context/ManagerContext";
import isEmpty from "lodash/isEmpty";
import { motion } from "framer-motion";

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

export const UserPanel = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  gap: 8%;
  position: relative;
  align-items: center;
  padding: 0 10px;
  @media (max-width: 1500px) {
    padding-right: 40px;
  }
`;

export const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 45px;
`;

export const UserName = styled.h5`
  padding: 0;
  margin: 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
`;

export const UserLocation = styled.span`
  color: ${({ theme }) => theme.colors.fonts.secondary};
`;

export const ArrowDownBtn = styled.img`
  position: absolute;
  right: 12px;
  cursor: pointer;
  @media (max-width: 1500px) {
    right: 4px;
  }
  ${({ dropState }) =>
    dropState
      ? css`
          transform: rotate(180deg);
        `
      : ""}
`;

export const DropDownListContainer = styled.ul`
  margin: -20px 0px 0px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  padding: 0;
  z-index: 1;

  @keyframes slide-down {
    0% {
      transform: scale(1, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  ${({ dropState }) =>
    dropState
      ? css`
          max-height: 120px;
          display: flex;
          transition: max-height 0.3s ease-in;
          transform-origin: 50% 0;
          animation: slide-down 0.3s ease-in;
        `
      : css`
          overflow: hidden;
          max-height: 0px;
          transition: max-height 0.3s ease-out;
        `}
`;

export const DropDownList = styled.li`
  text-align: center;
  transition: 0.5s;
  padding: 10px 12px;
  border: 3px solid ${({ theme }) => theme.colors.components.queueContainer.background};
  border-radius: 15px;
  cursor: pointer;
  margin-top: 25px;

  & button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fonts.inactiveMenu};
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    background-color: inherit;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.components.queueContainer.background} 0px 20px 30px -10px;
    transform: scale(1.05);
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
  /* &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.fonts.activeRoute};
    height: 48px;
    border-radius: 10px;
    position: absolute;
    left: 14px;
    transition: 0.3s;
  }
  &:hover::before {
    width: 90%;
  }
  &:hover span {
    color: #fff;
    font-weight: 500;
  } */
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
  font-size: 4vh;
  width: 100%;
  height: 80%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
  font-size: 1.6rem;
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
  font-size: 1.6rem;
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

  const [dropState, setDropState] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { manager, setManager } = useContext(ManagerContext);

  const handleClick = () => {
    setDropState(!dropState);
  };

  useEffect(() => {
    const roleState = user.data.data.role;
    if (roleState === "Manager") setManager(true);
  }, []);

  const handleSignOut = () => {
    setUser({ data: null });
  };

  const handleUserProfile = () => {
    navigate("/profile");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Background>
      <UserPanel>
        <UserAvatar src={UserLine} alt="User photo" />
        <UserDetails>
          <UserName>{user.data.data.fullName}</UserName>
          <UserLocation>{user.data.data.branch}</UserLocation>
        </UserDetails>
        <ArrowDownBtn
          src={ArrowDown}
          alt="Arrow Down Button Image"
          onClick={handleClick}
          dropState={dropState}
        />
      </UserPanel>
      <DropDownListContainer dropState={dropState}>
        <DropDownList onClick={handleSignOut}>
          <button>Sign out</button>
        </DropDownList>
        <DropDownList onClick={handleUserProfile}>
          <button>Profile</button>
        </DropDownList>
      </DropDownListContainer>
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
    </Background>
  );
};

export default LeftMenu;
