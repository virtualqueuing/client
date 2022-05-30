import React from "react";
import ConfirmButton from "../ConfirmButton";
import {
  LeftMenuContainer,
  CustomerInfo,
  CustomerNotes,
  CustomerStatus,
  CustomerActionBar,
  CustomerWaitingTime,
} from "../styles/LeftMenu.styles";

const LeftMenu = () => {
  return (
    <LeftMenuContainer>
      <CustomerInfo>
        <h1>No.144</h1>
        <li>First Nmae& Last Name</li>
        <li>0481005235</li>
      </CustomerInfo>
      <CustomerInfo>
        <h5>Notes</h5>
        <CustomerNotes>
          <li>Birthday</li>
          <li>Wheelchair * 1</li>
        </CustomerNotes>
      </CustomerInfo>
      <CustomerStatus>
        <h5>Status</h5>
        <h2>Waiting...</h2>
        <h5>Waiting time</h5>
        <CustomerWaitingTime>08:18:00</CustomerWaitingTime>
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

export default LeftMenu;
