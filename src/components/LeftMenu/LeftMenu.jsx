import React, { useContext, useState, useEffect } from "react";
import ConfirmButton from "../ConfirmButton";
// import { queues } from "../../assets/dummyData/dummyData";
import { Context } from "../../pages/Context";
import {
  LeftMenuContainer,
  CustomerInfo,
  CustomerNotes,
  CustomerStatus,
  CustomerActionBar,
  CustomerWaitingTime,
} from "../styles/LeftMenu.styles";

const LeftMenu = () => {
  const [selectedQueue] = useContext(Context);
  // let forceUpdate = useForceUpdate();
  const customerNote = selectedQueue.notes;

  // calculate waiting time by subtracting createTime from current time
  const waitingTime = () => {
    const createdTime = Date.parse(selectedQueue.createdAt);
    const waitingTime = new Date().getTime() - createdTime;
    const minutes = Math.floor(waitingTime / 60000);
    const seconds = Math.floor((waitingTime % 60000) / 1000);
    return `${minutes} mins ${seconds} s`;
  };

  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(waitingTime());
    }, 10);
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return (
    <LeftMenuContainer>
      <CustomerInfo>
        <h1>No.{selectedQueue.queueNumber}</h1>
        <li>{selectedQueue.name}</li>
        <li>{selectedQueue.phoneNumber}</li>
      </CustomerInfo>
      <CustomerInfo>
        <h5>Notes</h5>
        <CustomerNotes>
          {/* {customerNote.map((note) => (
            <li key={note}>{note}</li>
          ))} */}
          {customerNote}
        </CustomerNotes>
      </CustomerInfo>
      <CustomerStatus>
        <h5>Status</h5>
        <h2
          style={{
            color:
              selectedQueue.status === "Waiting"
                ? "#FFD25D"
                : selectedQueue.status === "Absent"
                ? "#DD0000"
                : "#13E800",
          }}
        >
          {selectedQueue.status}...
        </h2>
        <h5>Waiting time</h5>
        <CustomerWaitingTime>{time}</CustomerWaitingTime>
      </CustomerStatus>
      <CustomerActionBar>
        <ConfirmButton bg="#5D5670" color="#fff">
          Complete
        </ConfirmButton>
        <ConfirmButton bg="#DD0000" color="#fff">
          Absent
        </ConfirmButton>
      </CustomerActionBar>
    </LeftMenuContainer>
  );
};
// setInterval(testInfo, 1000);

export default LeftMenu;
