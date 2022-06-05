import React, { useContext } from "react";
import ConfirmButton from "../ConfirmButton";
import { queues } from "../../assets/dummyData/dummyData";
import Homepage from "../../pages/Homepage";
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

  return (
    <LeftMenuContainer>
      <CustomerInfo>
        <h1>No.{queues[context].queueNumber}</h1>
        <li>{queues[context].name}</li>
        <li>{queues[context].phoneNumber}</li>
      </CustomerInfo>
      <CustomerInfo onClick={Homepage}>
        <h5>Notes</h5>
        <CustomerNotes>
          {customerNote.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </CustomerNotes>
      </CustomerInfo>
      <CustomerStatus>
        <h5>Status</h5>
        <h2>Waiting...</h2>
        <h5>Waiting time</h5>
        <CustomerWaitingTime>16:00:00</CustomerWaitingTime>
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
