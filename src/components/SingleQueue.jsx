import {
  QueueItem,
  QueueData,
  QueueDataContainer,
  TooltipContainer,
  StatusButtonContainer,
  StatusButton,
} from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";

import React, { useEffect, useState, useRef } from "react";
import { showNewFormContext } from "../pages/Context";
import messageIcon from "../assets/Icons/Button_Message.svg";
import editIcon from "../assets/Icons/Button_Edit.svg";
import arrivalActiveIcon from "../assets/Icons/Button_Arrival.svg";
import absentActiveIcon from "../assets/Icons/Button_Absent.svg";
import guestIcon from "../assets/Icons/guest.svg";
import Tooltip from "./Tooltip";
import theme from "../theme";
import axios from "axios";
import ArrivalModal from "./RightMenu/components/ArrivalModal";
import AbsentModal from "./RightMenu/components/AbsentModal";
import { API_URI, QUEUE_STATUS } from "../constant.jsx";
import AddNewPage from "../pages/AddNewPage";
import PropTypes from "prop-types";

const SingleQueue = ({
  _id,
  name,
  phoneNumber,
  queueNumber,
  guestsNumber,
  tableSize,
  status,
  notes,
  activeQueueId,
  setActiveQueueId,
  setQueues,
}) => {
  SingleQueue.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    queueNumber: PropTypes.number.isRequired,
    guestsNumber: PropTypes.number.isRequired,
    tableSize: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    activeQueueId: PropTypes.string.isRequired,
    setActiveQueueId: PropTypes.func.isRequired,
    setQueues: PropTypes.func.isRequired,
  };

  const [isSending, setIsSending] = useState(false);
  const [showArrivalModal, setShowArrivalModal] = useState(false);
  const [showAbsentModal, setShowAbsentModal] = useState(false);
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const addNewRef = useRef(); // close add-new page ouside the popup region

  const handleClick = () => {
    setActiveQueueId(_id);
  };

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

  const queueComplete = async (id, setQueues) => {
    if (isSending) return;
    setIsSending(true);
    await axios.put(`${API_URI}/v1/queues/${id}/Completed`, {});
    const { data } = await axios.get(`${API_URI}/v1/queues`);
    setQueues(data);
    setIsSending(false);
  };

  const queueAbsent = async (id, setQueues) => {
    if (isSending) return;
    setIsSending(true);
    await axios.put(`${API_URI}/v1/queues/${id}/Absent`, {});
    const { data } = await axios.get(`${API_URI}/v1/queues`);
    setQueues(data);
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
            onClick={() => setShowArrivalModal(true)}
            disabled={isSending || status === QUEUE_STATUS.COMPLETED}
            fontColor={theme.colors.components.arrivalButton.fontColor}
            borderColor={theme.colors.components.arrivalButton.borderColor}
          >
            <img src={arrivalActiveIcon} alt="arrivalIcon" />
            Arrival
          </StatusButton>
          <StatusButton
            onClick={() => setShowAbsentModal(true)}
            disabled={isSending || status === QUEUE_STATUS.ABSENT}
            fontColor={theme.colors.components.absentButton.fontColor}
            borderColor={theme.colors.components.absentButton.borderColor}
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
      <showNewFormContext.Provider value={{ setShowAddNewForm }}>
        {showAddNewForm && (
          <div ref={addNewRef}>
            <AddNewPage
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
      </showNewFormContext.Provider>
      {showArrivalModal && (
        <ArrivalModal
          id={_id}
          setShowArrivalModal={setShowArrivalModal}
          queueComplete={queueComplete}
          setQueues={setQueues}
        />
      )}
      {showAbsentModal && (
        <AbsentModal
          id={_id}
          setShowAbsentModal={setShowAbsentModal}
          queueAbsent={queueAbsent}
          setQueues={setQueues}
        />
      )}
    </>
  );
};

export default SingleQueue;
