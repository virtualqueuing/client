import styled from "styled-components";

export const LeftMenuContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.queuePage};
  width: 27vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
    padding: 0 0 10px 30px;
  }
  & > div > h1 {
    font-size: 3rem;
    padding: 20px 0 0 30px;
    margin: 0;
  }

  & > div > h5 {
    padding: 20px 0 10px 30px;
    margin: 0;
    color: #9a9a9a;
  }
`;

export const CustomerInfo = styled.div`
  width: calc(100%-20px);
  margin: 0 10px;
  height: 27%;
  border-bottom: 1px solid #c4c4c4;
  & > li {
    font-size: 4vh;
  }
`;

export const CustomerNotes = styled.div`
  width: 100%;
  & > li {
    font-size: 3vh;
    list-style: decimal;
  }
`;

export const CustomerStatus = styled.div`
  width: calc(100%-20px);
  margin: 0 10px;
  height: 30%;
  & > h2 {
    font-size: 4vh;
    margin: 0;
    padding: 0 30px;
    color: ${({ theme }) => theme.colors.statusW};
  }
  border-bottom: 1px solid #c4c4c4;
`;

export const CustomerWaitingTime = styled.span`
  font-size: 4vh;
  padding: 0 0 10px 30px;
`;

export const CustomerActionBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const SeperateLine = styled.div`
  width: 95%;
  border: 1px solid #c4c4c4;
  border-radius: 20%;
  margin: 0 2.5%;
`;
