import { QueueItem, QueueData, QueueDataContainer, TooltipContainer, StatusButtonContainer } from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useContext } from "react";
import { Context } from "../pages/Context";
import messageIcon from "../assets/message-2-fill.svg";
import editIcon from "../assets/pencil-fill.svg";
import Tooltip from "./Tooltip";

// import { CheckQueueNum } from "../pages/Homepage";

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
          <QueueData color="#000">
            <p>{guestsNumber}</p>
          </QueueData>
          <QueueData color="#000">
            <p>{tableSize}</p>
          </QueueData>
          <QueueData
            style={{
              borderRadius: "5px", boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)", 
              color: status === "Waiting" ? "#FFAB5D" : status === "Absent" ? "#E64848" : "#2EAD7C",
              backgroundColor: status === "Waiting" ? "rgba(255, 253, 205, 0.5)" : status === "Absent" ? "rgba(254, 63, 127, 0.1)" : "rgba(46, 173, 124, 0.1)",
              fontWeight: "bold"
            }}
          >
            {status}
          </QueueData>
        </QueueDataContainer>
        {/* <QueueData color="#000">
          <p>{queueNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{name}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{phoneNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{guestsNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{tableSize}</p>
        </QueueData>
        <QueueData
          style={{
            borderRadius: "5px", boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)", 
            color: status === "Waiting" ? "#FFAB5D" : status === "Absent" ? "#E64848" : "#2EAD7C",
            backgroundColor: status === "Waiting" ? "rgba(255, 253, 205, 0.5)" : status === "Absent" ? "rgba(254, 63, 127, 0.1)" : "rgba(46, 173, 124, 0.1)",
            fontWeight: "bold"
          }}
        >
          {status}
        </QueueData> */}
        <StatusButtonContainer>
          <button>Arrival</button>
          <button>Absent</button>
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
