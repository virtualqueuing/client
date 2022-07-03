import React, { useState } from "react";
import styled, { css } from "styled-components";
import MenuQueueList from "../../assets/Icons/Menu_QueueList-inactive.svg";
import DashBoardClock from "../../assets/Icons/Menu_Dashboard-inactive.svg";
import BirthdayIcon from "../../assets/Icons/Note_Birthday.svg";
import WheelchairIcon from "../../assets/Icons/Note_WheelChair.svg";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";
import ArrowDown from "../../assets/Icons/arrow-down-s-line.svg";

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6%;
  width: auto;
  height: 100vh;
  padding: 40px 15px;
`;
const UserPanel = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  gap: 8%;
  position: relative;
  align-items: center;
  @media (max-width: 1500px) {
    padding-right: 40px;
  }
`;

const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 20px;
`;

const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 45px;
`;
const UserName = styled.h5`
  padding: 0;
  margin: 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
`;

const UserLocation = styled.span`
  color: ${({ theme }) => theme.colors.fonts.secondary};
`;

const ArrowDownBtn = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
  ${(props) =>
    props.dropState
      ? css`
          transform: rotate(180deg);
        `
      : " "}
`;

const DropDownListContainer = styled.ul`
  margin: -35px 0 0 0;
  display: none;
  height: 160px;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid rgba(0, 0, 0, 0.04); */
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
  ${(props) =>
    props.dropState
      ? css`
          display: flex;
          transition: max-height 0.3s ease-in;
          transform-origin: 50% 0;
          animation: slide-down 0.3s ease-in;
        `
      : " "}
`;

const DropDownList = styled.li`
  text-align: center;
  transition: 0.5s;
  & a {
    color: ${({ theme }) => theme.colors.fonts.inactiveMenu};
    font-weight: 700;
    text-decoration: none;
  }
  padding: 10px 12px;
  border: 3px solid ${({ theme }) => theme.colors.components.queueContainer.background};
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.components.queueContainer.background} 0px 20px 30px -10px;
    transform: scale(1.05);
  }
`;

const LeftSideBarOptionContainer = styled.div`
  padding-bottom: 90px;
  @media (max-width: 1500px) {
    padding-bottom: 0;
  }
`;

const LeftSideBarOption = styled.div`
  width: 303px;
  height: 53px;
  display: flex;
  align-items: center;
  gap: 3%;
  cursor: pointer;
  @media (max-width: 1500px) {
    width: auto;
  }
`;

const LeftSideBarOptionIcon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 1500px) {
    width: 20px;
    height: 20px;
  }
`;

const LeftSideBarOptionDescription = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.fonts.activeRoute};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

const CurrentQueueDetailsContainer = styled.div`
  display: flex;
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
`;

const SingleQueueNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SingleQueueNotes = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: left;
  background: ${({ theme }) => theme.colors.components.tags.birthdayTag};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px 20px 10px 10px;
  margin: 10px 0;
  overflow: hidden;
`;

const SingleQueueIcon = styled.img`
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
  color: ${({ theme }) => theme.colors.fonts.secondary};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

const LeftMenu = () => {
  // const dropOption = ["Sign Out", "Profile"];
  const dropOption = [
    { name: "Sign Out", path: "/home" },
    { name: "Profile", path: "/profile" },
  ];
  const [dropState, setDropState] = useState(false);
  const handleClick = () => {
    setDropState(!dropState);
  };
  return (
    <Background>
      <UserPanel>
        <UserAvatar src={UserLine} />
        <UserDetails>
          <UserName>Roy</UserName>
          <UserLocation>Sunnybank</UserLocation>
        </UserDetails>
        <ArrowDownBtn
          src={ArrowDown}
          alt="Arrow Down Button Image"
          onClick={handleClick}
          dropState={dropState}
        />
      </UserPanel>
      <DropDownListContainer dropState={dropState}>
        {dropOption.map((option, index) => {
          return (
            <DropDownList key={index}>
              <a href={option.path}>{option.name}</a>
            </DropDownList>
          );
        })}
      </DropDownListContainer>
      <LeftSideBarOptionContainer>
        <LeftSideBarOption>
          <LeftSideBarOptionIcon src={MenuQueueList} alt="Queue List Icon" />
          <LeftSideBarOptionDescription>Queue List</LeftSideBarOptionDescription>
        </LeftSideBarOption>
        <LeftSideBarOption>
          <LeftSideBarOptionIcon src={DashBoardClock} alt="Dashboard Icon" />
          <LeftSideBarOptionDescription>Dashboard</LeftSideBarOptionDescription>
        </LeftSideBarOption>
      </LeftSideBarOptionContainer>
      <CurrentQueueDetailsContainer>
        <CurrentQueueDetailTitle>Current Queue:</CurrentQueueDetailTitle>
        <CurrentQueueNumberAndName></CurrentQueueNumberAndName>
      </CurrentQueueDetailsContainer>
      <SingleQueueNotesContainer>
        <CurrentQueueDetailTitle>Notes:</CurrentQueueDetailTitle>
        <SingleQueueNotes>
          <SingleQueueIcon src={BirthdayIcon} alt="Birthday Notes Icon" />
          <SingleQueueDescription>Birthday</SingleQueueDescription>
        </SingleQueueNotes>
        <SingleQueueNotes>
          <SingleQueueIcon src={WheelchairIcon} alt="Wheelchair Notes Icon" />
          <SingleQueueDescription>Wheelchair</SingleQueueDescription>
        </SingleQueueNotes>
      </SingleQueueNotesContainer>
    </Background>
  );
};

export default LeftMenu;
