import React, { useContext, useState, useEffect } from "react";
import ConfirmButton from "../ConfirmButton";
import axios from "axios";
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
  const [selectedQueue, setSelectedQueue] = useContext(Context);
  const [isSending, setIsSending] = useState(false);

  const queueComplete = async () => {
    if (isSending) return;
    setIsSending(true);
    await axios.put(`http://localhost:3000/v1/queues/${selectedQueue._id}/Completed`, {});
    const { data } = await axios.get(`http://localhost:3000/v1/queues/${selectedQueue._id}`);
    setSelectedQueue(data);
    setIsSending(false);
  };

  const queueAbsent = async () => {
    if (isSending) return;
    setIsSending(true);
    await axios.put(`http://localhost:3000/v1/queues/${selectedQueue._id}/Absent`, {});
    const { data } = await axios.get(`http://localhost:3000/v1/queues/${selectedQueue._id}`);
    setSelectedQueue(data);
    setIsSending(false);
  };

  let customerNote = selectedQueue.notes;
  if (typeof customerNote === "undefined") {
    customerNote = [" "];
    // do stuff with arr
  } else {
    customerNote = customerNote.split(",");
  }

  // calculate waiting time by subtracting createTime from current time
  const waitingTime = () => {
    const createdTime = Date.parse(selectedQueue.createdAt);
    const waitingTime = new Date().getTime() - createdTime;
    const hours = Math.floor(waitingTime / 3600000);
    const minutes = Math.floor(waitingTime / 60000 - hours * 60);
    return `${hours} hrs ${minutes} mins`;
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
          {customerNote.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
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
        <ConfirmButton bg="#5D5670" color="#fff" onClick={queueComplete} disabled={isSending}>
          Complete
        </ConfirmButton>
        <ConfirmButton bg="#DD0000" color="#fff" onClick={queueAbsent} disabled={isSending}>
          Absent
        </ConfirmButton>
      </CustomerActionBar>
    </LeftMenuContainer>
  );
};
// setInterval(testInfo, 1000);

export default LeftMenu;
