import React, { useContext, useState, useEffect } from "react";
import ConfirmButton from "../ConfirmButton";
import { queues } from "../../assets/dummyData/dummyData";
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
  const [context] = useContext(Context);
  // let forceUpdate = useForceUpdate();
  const customerNote = queues[context].notes.split(",");

  // calculate waiting time by subtracting createTime from current time
  const waitingTime = () => {
    const waitingTime = new Date().getTime() - queues[context].createTime;
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
        <h1>No.{queues[context].queueNumber}</h1>
        <li>{queues[context].name}</li>
        <li>{queues[context].phoneNumber}</li>
      </CustomerInfo>
      <CustomerInfo>
        <h5>Notes</h5>
        <CustomerNotes>
          {customerNote.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </CustomerNotes>
      </CustomerInfo>
      <CustomerStatus>
        <h5>Status</h5>
        <h2
          style={{
            color:
              queues[context].state === "Waiting"
                ? "#FFD25D"
                : queues[context].state === "Absent"
                ? "#DD0000"
                : "#13E800",
          }}
        >
          {queues[context].state}...
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
