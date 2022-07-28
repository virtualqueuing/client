import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import UserLine from "../assets/Icons/Netflix-avatar 1.svg";
import ArrowDown from "../assets/Icons/arrow-down-s-line.svg";
import MenuQueueList from "../assets/Icons/Menu_QueueList.svg";
import Container from "../components/Container";
import {
  Background,
  UserPanel,
  UserAvatar,
  UserDetails,
  UserName,
  UserLocation,
  ArrowDownBtn,
  DropDownListContainer,
  DropDownList,
  LeftSideBarOptionIcon,
  LeftSideBarOptionContainer,
  LeftSideBarOption,
  LeftSideBarOptionDescription,
} from "../components/LeftMenu/LeftMenu";
import DashboardApp from "../components/Dashboard/DashboardApp";

const DashboardPage = () => {
  const [dropState, setDropState] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setDropState(!dropState);
  };

  const handleSignOut = () => {
    setUser({ data: null });
    navigate("/home");
  };

  const handleUserProfile = () => {
    navigate("/profile");
  };

  const navigateToMainQueues = () => {
    navigate("/");
  };

  return (
    <Container>
      <Background backgroundHeight={"120vh"}>
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
          <LeftSideBarOption onClick={navigateToMainQueues}>
            <LeftSideBarOptionIcon src={MenuQueueList} alt="Queue List Icon" />
            <LeftSideBarOptionDescription>Queue List</LeftSideBarOptionDescription>
          </LeftSideBarOption>
        </LeftSideBarOptionContainer>
      </Background>
      <DashboardApp />
    </Container>
  );
};

export default DashboardPage;
