import {
  QueueItem,
  QueueData,
  QueueDataContainer,
  TooltipContainer,
  StatusButtonContainer,
  StatusButton,
} from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useContext } from "react";
import { Context } from "../pages/Context";
import messageIcon from "../assets/Icons/Button_Message.svg";
import editIcon from "../assets/Icons/Button_Edit.svg";
import arrivalInactiveIcon from "../assets/Icons/Button_Arrival-inactive.svg";
import absentInactiveIcon from "../assets/Icons/Button_Absent-inactive.svg";
import guestIcon from "../assets/Icons/guest.svg";
import Tooltip from "./Tooltip";

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
  const handleClick = () => {
    setSelectedQueue({ _id, name, phoneNumber, queueNumber, status, notes, createdAt });
    setActiveQueueId(_id);
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
          <StatusButton>
            <img src={arrivalInactiveIcon} alt="arrivalIcon" />
            Arrival
          </StatusButton>
          <StatusButton>
            <img src={absentInactiveIcon} alt="arrivalIcon" />
            Absent
          </StatusButton>
        </StatusButtonContainer>
        <TooltipContainer>
          <Tooltip text="Notify">
            <img src={messageIcon} alt="sending message icon" />
          </Tooltip>
          <Tooltip text="Update">
            <img src={editIcon} alt="sending message icon" />
          </Tooltip>
        </TooltipContainer>
      </QueueItem>
      <SeparateLine color="#c4c4c4" width="100%"></SeparateLine>
    </>
  );
};

export default SingleQueue;
