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
  width: 15%;
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

  /* align-items: center; */
  /* margin: 20px auto; */
  /* .UserName {
    font-weight: bold;
  }
  .UserLine {
    width: 51px;
    height: 51px;
    left: 22px;
    top: 31px;
    background: url(Netflix-avatar.png);
    border-radius: 20px;
  } */
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
  width: 100%;
  height: 180px;
`;

const LeftSideBarOption = styled.div`
  width: 303px;
  height: 53px;
  display: flex;
  align-items: center;
  gap: 3%;
  cursor: pointer;
`;

const LeftSideBarOptionIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const LeftSideBarOptionDescription = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.fonts.activeRoute};
`;

const CurrentQueueDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 150px;
`;
const CurrentQueueDetailTitle = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fonts.inactiveMenu};
`;
const CurrentQueueNumberAndName = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const SingleQueueNotesContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SingleQueueNotes = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.components.tags.birthdayTag};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const SingleQueueIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SingleQueueDescription = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.fonts.secondary};
`;

// const RoutePanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 80%;
//   margin-left: 10%;
//   background-color: #e5e5e5;
//   height: 200px;
//   font-size: 25px;
//   padding-left: 20px;
// `;
// const CurrentQueue = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 90%;
//   margin: 50px auto;
//   color: #666666;
//   .Title {
//     width: 150px;
//     height: 26px;
//     left: 29px;
//     top: 366px;
//     font-style: normal;
//     font-weight: 300;
//     font-size: 20px;
//     line-height: 24px;
//     color: #9a9a9a;
//   }
// `;
// const Title = styled.div`
//   color: #9a9a9a;
//   margin-bottom: 15px;
// `;
// const QueueNumber = styled.div`
//   width: 40%;
//   height: 90%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 5%;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 25px;
//   line-height: 61px;
//   color: #666666;
// `;
// const CurrentCustomer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #666666;
//   background-color: #edf4f4;
//   width: 291px;
//   height: 120px;
//   border-radius: 10px;
//   box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.25);
//   font-style: normal;
//   font-weight: 700;
//   font-size: 25px;
//   line-height: 48px;
//   color: #666666;
// `;
// const QueueLIST = styled.div`
//   margin-left: -30px;
//   padding-left: 20px;
//   width: 250px;
//   height: 53px;
//   top: 129px;
//   background: #ffffff;
//   box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   color: #516d98;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .QueueList {
//     margin: 10px 40px 10px 10px;
//     width: 130px;
//     height: 30px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 25px;
//     line-height: 30px;
//   }
// `;

// const DashBoardAboutUs = styled.div`
//   background-color: #e5e5e5;
//   display: flex;
//   justify-content: flex-start;
//   color: #c4c4c4;
//   font-size: 30px;
//   .MenuName {
//     margin: 3px 40px 10px 10px;
//     width: 133px;
//     height: 30px;
//     left: 75px;
//     top: 206px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 25px;
//     line-height: 30px;
//     color: #c4c4c4;
//   }
//   width: 30px;
//   height: 30px;
//   left: 35px;
//   top: 206px;
//   background: url(dashboard-3-line.png);
//   opacity: 0.6;
// `;
// const UserName = styled.div`
//   width: 28px;
//   height: 18px;
//   left: 93px;
//   top: 39px;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 15px;
//   line-height: 18px;
//   color: #606060;
// `;
// const UserLocation = styled.div`
//   width: 79px;
//   height: 18px;
//   left: 93px;
//   top: 63px;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 18px;
//   color: #666666;
// `;
// const User = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
// `;
// const CustomerName = styled.div`
//   width: 40%;
//   height: 90%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 5%;
// `;

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
      {/* <UserPanel>
      <img src={UserLine} className="UserLine" alt="UserLine" />
      <User className="User">
        <UserName className="UserName">Roy</UserName>
        <UserLocation>Sunnybank</UserLocation>
      </User>
      <img src={ArrowButton} className="Arrow-down" alt="Arrow-down" />
    </UserPanel>
    <RoutePanel>
      <QueueLIST>
        <img src={MenuQueueList} className="Menu_QueueList" alt="MenuButton" />
        <div className="QueueList">Queue List</div>
      </QueueLIST>
      <DashBoardAboutUs>
        <img src={DashBoardClock} className="Menu_Dashboard-inactive" alt="MenuButton" />
        <div className="MenuName">DashBoard</div>
      </DashBoardAboutUs>
      <DashBoardAboutUs>
        <img src={AboutUsPeople} className="Menu_AboutUs-inactive" alt="MenuButton" />
        <div className="MenuName">AboutUs</div>
      </DashBoardAboutUs>
    </RoutePanel>
    <CurrentQueue>
      <Title className="Title">Current Queue:</Title>
      <CurrentCustomer>
        <QueueNumber>
          <h1>149</h1>
        </QueueNumber>
        <VerticalDivider />
        <CustomerName>
          <h1>Ting</h1>
        </CustomerName>
      </CurrentCustomer>
    </CurrentQueue> */}
    </Background>
  );
};

export default LeftMenu;
