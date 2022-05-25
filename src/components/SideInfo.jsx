import React from "react";
import styled from "styled-components";

const SideMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.queuePage};
  width: 27vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  li {
    list-style: none;
    padding: 10px 30px;
  }
  & > div > h1 {
    font-size: 3rem;
    padding: 20px 30px;
    margin: 0;
  }

  & > div > h5 {
    padding: 20px 30px;
    margin: 0;
    color: #9a9a9a;
  }
`;

const PersonalInfo = styled.div`
  width: 100%;
  height: 27%;
`;

const NoteList = styled.div`
  width: 100%;
  & > li {
    font-size: 1.5rem;
    list-style: decimal;
  }
`;

const Status = styled.div`
  width: 100%;
  height: 30%;
  & > h2 {
    margin: 0;
    padding: 0 30px;
    color: ${({ theme }) => theme.colors.statusW};
  }
`;

const WaitingTime = styled.span`
  font-size: 1.5rem;
  padding: 0 30px;
`;

const Confirm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ConfirmButton = styled.button`
  border-radius: 50px;
  width: 130px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  margin: 30px 0;
  padding: 15px 15px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const SeperateLine = styled.div`
  width: 95%;
  border: 1px solid #c4c4c4;
  border-radius: 20%;
  margin: 0 2.5%;
`;
/* change for test*/
/* change for test*/

export default function SideInfo() {
  return (
    <SideMenu>
      <PersonalInfo>
        <h1>No.144</h1>
        <li>First Nmae& Last Name</li>
        <li>0481005235</li>
      </PersonalInfo>
      <SeperateLine></SeperateLine>
      <PersonalInfo>
        <h5>Notes</h5>
        <NoteList>
          <li>Birthday</li>
          <li>Wheelchair * 1</li>
        </NoteList>
      </PersonalInfo>
      <SeperateLine></SeperateLine>
      <Status>
        <h5>Status</h5>
        <h2>Waiting...</h2>
        <h5>Waiting time</h5>
        <WaitingTime>08:18:00</WaitingTime>
      </Status>
      <SeperateLine></SeperateLine>
      <Confirm>
        <ConfirmButton bg="#5D5670" color="#fff">
          Complete
        </ConfirmButton>
        <ConfirmButton bg="#DD0000" color="#fff">
          Absent
        </ConfirmButton>
      </Confirm>
    </SideMenu>
  );
}
