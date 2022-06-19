import React from 'react';
import styled from 'styled-components';
import MenuQueueList from '../../assets/Icons/Menu_QueueList.svg';
import DashBoardClock from '../../assets/Icons/Menu_Dashboard-inactive.svg';
import AboutUsPeople from '../../assets/Icons/Menu_AboutUs-inactive.svg';
import ArrowButton from '../../assets/Icons/arrow-down-s-line.svg';
import UserLine from '../../assets/Icons/Netflix-avatar 1.svg';

const VerticalDivider = styled.div`
width: 3px;
height: 100px;
background-color: #C4C4C4;
border: 2px;
`
const Background = styled.div`
background-color: #E5E5E5;
display: flex;
flex-direction: column;
width: 20rem;
height: 100vh;
margin: 5px auto 5px 5px;
`
const UserPanel = styled.div`
display: flex;
justify-content: space-around;
width: 90%;
height: 50px;
margin: 20px auto;
.UserName{
  font-weight: bold;
}
.UserLine{
width: 51px;
height: 51px;
left: 22px;
top: 31px;
background: url(Netflix-avatar.png);
border-radius: 20px;
}
`
const RoutePanel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 80%;
margin-left: 10%;
background-color: #E5E5E5;
height: 200px;
font-size: 25px;
padding-left: 20px;
`
const CurrentQueue = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: 50px auto;
color: #666666;
.Title{
width: 150px;
height: 26px;
left: 29px;
top: 366px;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: #9A9A9A;
}
`
const Title =styled.div`
color: #9A9A9A;
margin-bottom: 15px;
`
const QueueNumber = styled.div`
width: 40%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5%;
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 61px;
color: #666666;
`
const CurrentCustomer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #666666;
background-color: #EDF4F4;
width: 291px;
height: 120px;
border-radius: 10px;
box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.25);
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 48px;
color: #666666;
`
const QueueLIST = styled.div`
margin-left: -30px;
padding-left: 20px;
width: 250px;
height: 53px;
top: 129px;
background:#FFFFFF;
box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.25);
border-radius: 10px;
color: #516D98;
display: flex;
justify-content: center;
align-items: center;
.QueueList{
margin: 10px 40px 10px 10px;
width: 130px;
height: 30px;
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
`
const DashBoardAboutUs = styled.div`
background-color: #E5E5E5;
display: flex;
justify-content: flex-start;
color: #C4C4C4;
font-size: 30px;
.MenuName{
  margin: 3px 40px 10px 10px;
  width: 133px;
height: 30px;
left: 75px;
top: 206px;
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
color: #C4C4C4;
}
width: 30px;
height: 30px;
left: 35px;
top: 206px;
background: url(dashboard-3-line.png);
opacity: 0.6;
`
const UserName = styled.div`
width: 28px;
height: 18px;
left: 93px;
top: 39px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #606060;
`
const UserLocation =styled.div`
width: 79px;
height: 18px;
left: 93px;
top: 63px;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
color: #666666;
`
const User = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const CustomerName = styled.div`
width: 40%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5%;
`

const LeftMenu = ()=>(
    <Background>
    <UserPanel>
    <img src={UserLine} className="UserLine" alt="UserLine" />
      <User className='User'>
        <UserName className='UserName'>
          Roy
        </UserName>
        <UserLocation>
          Sunnybank
        </UserLocation>
        </User>
        <img src={ArrowButton} className="Arrow-down" alt="Arrow-down" />
    </UserPanel>
    <RoutePanel>
      <QueueLIST>
      <img src={MenuQueueList} className="Menu_QueueList" alt="MenuButton" />
        <div className='QueueList'>Queue List</div>
      </QueueLIST>
      <DashBoardAboutUs>
      <img src={DashBoardClock} className="Menu_Dashboard-inactive" alt="MenuButton" />
        <div className='MenuName'>DashBoard</div>
      </DashBoardAboutUs>
      <DashBoardAboutUs>
      <img src={AboutUsPeople} className="Menu_AboutUs-inactive" alt="MenuButton" />
        <div className='MenuName'>AboutUs</div>
      </DashBoardAboutUs>
      </RoutePanel>
    <CurrentQueue>
      <Title className='Title'>Current Queue:</Title>
      <CurrentCustomer>
      <QueueNumber>
        <h1>149</h1>
        </QueueNumber>
      <VerticalDivider />
      <CustomerName>
        <h1>Ting</h1>
        </CustomerName>
      </CurrentCustomer>
    </CurrentQueue>
  </Background>
)

export default LeftMenu;
