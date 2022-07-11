import {
  QueueItem,
  QueueData,
  QueueDataContainer,
  TooltipContainer,
  StatusButtonContainer,
  StatusButton,
  NoteButton
} from "./styles/SingleQueue.styles";
import TooltipBox from "./styles/Tooltip.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useState } from "react";
import { showNewFormContext } from "../pages/Context";
import messageIcon from "../assets/Icons/Button_Message.svg";
import editIcon from "../assets/Icons/Button_Edit.svg";
import arrivalActiveIcon from "../assets/Icons/Button_Arrival.svg";
import arrivalDisableIcon from "../assets/Icons/Button_Arrival_Disable.svg";
import absentActiveIcon from "../assets/Icons/Button_Absent.svg";
import absentDisableIcon from "../assets/Icons/Button_Absent_Disable.svg";
import guestIcon from "../assets/Icons/guest.svg";
// import Tooltip from "./Tooltip";
import theme from "../theme";
import axios from "axios";
import ArrivalModal from "./RightMenu/components/ArrivalModal";
import AbsentModal from "./RightMenu/components/AbsentModal";
import { API_URI, QUEUE_STATUS } from "../constant.jsx";
import AddNewPage from "../pages/AddNewPage";
import PropTypes from "prop-types";
import { HoverNotesContainer, NotesBox } from "./HoverNotes";
import { NewTag } from "./AddNew/CreateTags";
import { random } from "lodash";
import MessagingModal from "./RightMenu/components/MessagingModal";
import { Popup } from 'semantic-ui-react'



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
  const [showMessagingModal, setShowMessagingModal] = useState(false);

  const arrivalFontActive = "#5F5186";
  const absenceFontActive = "#E74C3C";
  const arrivalBorderActive = "#5F5186";
  const absenceBorderActive = "#E60012";
  const disableColor = "rgba(93, 86, 112, 0.7)";

  const handleClick = () => {
    setActiveQueueId(_id);
  };
  const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;

  const queueComplete = async (id, setQueues) => {
    if (isSending) return;
    setIsSending(true);
    const { data } = await axios.put(
      `${API_URI}/v1/queues/${id}/complete`,
      {},
      { headers: { Authorization: BEARER_TOKEN } }
    );
    setQueues(data);
    setIsSending(false);
  };

  const queueAbsent = async (id, setQueues, absentReason) => {
    if (isSending) return;
    setIsSending(true);
    const { data } = await axios.put(
      `${API_URI}/v1/queues/${id}/absent`,
      { absentReason },
      { headers: { Authorization: BEARER_TOKEN } }
    );
    setQueues(data);
    setIsSending(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const showQueueNotes = isHovered;

  return (
    <>
      <QueueItem
        active={_id === activeQueueId}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showQueueNotes && (
          <Popup trigger={<NoteButton>i</NoteButton>}>
            <HoverNotesContainer>
              <NotesBox>
                Notes:
                {notes[0].split(",").map((note, index) => (
                  <NewTag
                    key={index}
                    style={{
                      marginLeft: 10,
                      backgroundColor:
                        theme.colors.components.tags.HovertagColorList[
                        random(0, theme.colors.components.tags.HovertagColorList.length - 1)
                        ],
                    }}
                  >
                    {note}
                  </NewTag>
                ))}
              </NotesBox>
            </HoverNotesContainer>
          </Popup>
        )}
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
            fontColor={
              isSending || status === QUEUE_STATUS.COMPLETED ? disableColor : arrivalFontActive
            }
            borderColor={
              isSending || status === QUEUE_STATUS.COMPLETED ? disableColor : arrivalBorderActive
            }
          >
            {isSending || status === QUEUE_STATUS.COMPLETED ? (
              <img src={arrivalDisableIcon} alt="arrivalIcon" />
            ) : (
              <img src={arrivalActiveIcon} alt="arrivalIcon" />
            )}
            Arrival
          </StatusButton>
          <StatusButton
            onClick={() => setShowAbsentModal(true)}
            disabled={isSending || status === QUEUE_STATUS.ABSENT}
            fontColor={
              isSending || status === QUEUE_STATUS.ABSENT ? disableColor : absenceFontActive
            }
            borderColor={
              isSending || status === QUEUE_STATUS.ABSENT ? disableColor : absenceBorderActive
            }
          >
            {isSending || status === QUEUE_STATUS.ABSENT ? (
              <img src={absentDisableIcon} alt="absenceIcon" />
            ) : (
              <img src={absentActiveIcon} alt="absenceIcon" />
            )}
            Absent
          </StatusButton>
        </StatusButtonContainer>
        <TooltipContainer>
          <Popup trigger={status === QUEUE_STATUS.WAITING ? (
            <img
              style={{ width: '30px', height: '30px' }}
              src={messageIcon}
              alt="message sending icon"
              onClick={() => {
                setShowMessagingModal(true);
              }}
            />
          ) : (
            <img style={{ width: '30px', height: '30px' }} src={messageIcon} alt="message sending icon" />
          )}>
            <TooltipBox>Notify</TooltipBox>
          </Popup>
          <Popup trigger={<img
            style={{ width: '30px', height: '30px' }}
            src={editIcon}
            alt="add new form icon"
            onClick={(e) => {
              setShowAddNewForm(true);
            }}
          />}>
            <TooltipBox>Update</TooltipBox>
          </Popup>
        </TooltipContainer>
      </QueueItem>
      <SeparateLine color={theme.colors.fonts.inactiveRoute} width="100%"></SeparateLine>
      <showNewFormContext.Provider value={{ setShowAddNewForm }}>
        {showAddNewForm && (
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
      {showMessagingModal && (
        <MessagingModal
          name={name}
          setShowMessagingModal={setShowMessagingModal}
          phoneNumber={phoneNumber}
          id={_id}
        />
      )}
    </>
  );
};

export default SingleQueue;
