import React from "react";
import styled from "styled-components";
import MenuQueueList from "../../assets/Icons/Menu_QueueList-inactive.svg";
import DashBoardClock from "../../assets/Icons/Menu_Dashboard-inactive.svg";
import BirthdayIcon from "../../assets/Icons/Note_Birthday.svg";
import WheelchairIcon from "../../assets/Icons/Note_WheelChair.svg";
import UserLine from "../../assets/Icons/Netflix-avatar 1.svg";

// const VerticalDivider = styled.div`
//   width: 3px;
//   height: 100px;
//   background-color: #c4c4c4;
//   border: 2px;
// `;
const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.components.leftSideMenu.background};
  margin: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 6%;
  width: auto;
  height: 100vh;
  padding: 40px 15px;
  /* margin: 5px auto 5px 5px; */
`;
const UserPanel = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 90%;
  height: 50px;
  gap: 8%;
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

const LeftSideBarOptionContainer = styled.div`
  /* width: auto;
  height: 180px; */
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
  // const menuOption = ["Queue List", "Dashboard"];
  return (
    <Background>
      <UserPanel>
        <UserAvatar src={UserLine} />
        <UserDetails>
          <UserName>Roy</UserName>
          <UserLocation>Sunnybank</UserLocation>
        </UserDetails>
      </UserPanel>
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
