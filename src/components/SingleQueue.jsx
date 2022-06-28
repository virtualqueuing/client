import {
  QueueItem,
  QueueData,
  QueueDataContainer,
  TooltipContainer,
  StatusButtonContainer,
  StatusButton,
} from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";

import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../pages/Context";
import messageIcon from "../assets/Icons/Button_Message.svg";
import editIcon from "../assets/Icons/Button_Edit.svg";
import arrivalActiveIcon from "../assets/Icons/Button_Arrival.svg";
import absentActiveIcon from "../assets/Icons/Button_Absent.svg";
import guestIcon from "../assets/Icons/guest.svg";
import Tooltip from "./Tooltip";
import theme from "../theme";
import axios from "axios";
import EditGuestPage from "../pages/EditGuestPage";
import { API_URI } from "../constant.jsx";
// import Controller from "./Controller";

const SingleQueue = ({
  _id,
  name,
  phoneNumber,
  queueNumber,
  guestsNumber,
  tableSize,
  status,
  notes,
  createdAt,
  activeQueueId,
  setActiveQueueId,
}) => {
  const [, setSelectedQueue] = useContext(Context);
  const [isSending, setIsSending] = useState(false);

  const handleClick = () => {
    setSelectedQueue({ _id, name, phoneNumber, queueNumber, status, notes, createdAt });
    setActiveQueueId(_id);
  };

  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const addNewRef = useRef(); // close add-new page ouside the popup region

  useEffect(() => {
    const handler = (event) => {
      if (!addNewRef?.current?.contains(event.target)) {
        setShowAddNewForm(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const queueComplete = async () => {
    if (isSending) return;
    setIsSending(true);
    const { data } = await axios.put(`${API_URI}/v1/queues/${_id}/Completed`, {});
    setSelectedQueue(data);
    setIsSending(false);
  };

  return (
    <>
      <QueueItem active={_id === activeQueueId} onClick={handleClick}>
        <QueueDataContainer>
          <QueueData color="#000">
            <p>{queueNumber}</p>
          </QueueData>
          <QueueData color="#000">
            <p>{name}</p>
          </QueueData>
          <QueueData color="#000">
            <p>{phoneNumber}</p>
          </QueueData>
          <QueueData color="#000" style={{ gap: "15px" }}>
            <img src={guestIcon} alt="guestIcon" />
            <p>{guestsNumber}</p>
          </QueueData>
          <QueueData color="#000">
            <p>{tableSize}</p>
          </QueueData>
          <QueueData
            style={{
              borderRadius: "5px",
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
              color: status === "Waiting" ? "#FFAB5D" : status === "Absent" ? "#E64848" : "#2EAD7C",
              backgroundColor:
                status === "Waiting"
                  ? "rgba(255, 253, 205, 0.5)"
                  : status === "Absent"
                  ? "rgba(254, 63, 127, 0.1)"
                  : "rgba(46, 173, 124, 0.1)",
              fontWeight: "bold",
            }}
          >
            {status}
          </QueueData>
        </QueueDataContainer>
        <StatusButtonContainer>
          <StatusButton
            onClick={queueComplete}
            disabled={isSending}
            fontColor={theme.colors.components.arrivalButton.fontColor}
            borderColor={theme.colors.components.arrivalButton.borderColor}
          >
            <img src={arrivalActiveIcon} alt="arrivalIcon" />
            Arrival
          </StatusButton>
          <StatusButton
            disabled={isSending}
            fontColor={theme.colors.components.absentButton.fontColor}
            borderColor={theme.colors.components.absentButton.fontColor}
          >
            <img src={absentActiveIcon} alt="arrivalIcon" />
            Absent
          </StatusButton>
        </StatusButtonContainer>
        <TooltipContainer>
          <Tooltip text="Notify">
            <img src={messageIcon} alt="sending message icon" />
          </Tooltip>
          <Tooltip text="Update">
            <img
              src={editIcon}
              alt="sending message icon"
              onClick={(e) => {
                setShowAddNewForm(true);
              }}
            />
          </Tooltip>
        </TooltipContainer>
      </QueueItem>
      <SeparateLine color={theme.colors.fonts.inactiveRoute} width="100%"></SeparateLine>
      <Context.Provider value={{ setShowAddNewForm }}>
        {showAddNewForm && (
          <div ref={addNewRef}>
            <EditGuestPage
              setShowAddNewForm={setShowAddNewForm}
              queueInfo={{
                _id,
                name,
                phoneNumber,
                queueNumber,
                guestsNumber,
                tableSize,
                status,
                notes,
              }}
            />
          </div>
        )}
      </Context.Provider>
    </>
  );
};

export default SingleQueue;
