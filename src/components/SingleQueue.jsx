import {
  QueueItem,
  QueueData,
  QueueDataContainer,
  QueueDataNumber,
  StatusButton,
  NoteButton,
  QueueDataWrapper,
  QueueIconWrapper,
  QueueIcon,
} from "./styles/SingleQueue.styles";
import { TooltipBox } from "./styles/Tooltip.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useState } from "react";
import { showNewFormContext } from "../pages/Context";
import messageIcon from "../assets/Icons/Button_Message.svg";
import inactiveMessageIcon from "../assets/Icons/Button_Message-inactive.svg";
import editIcon from "../assets/Icons/Button_Edit.svg";
import arrivalActiveIcon from "../assets/Icons/Button_Arrival.svg";
import arrivalDisableIcon from "../assets/Icons/Button_Arrival_Disable.svg";
import absentActiveIcon from "../assets/Icons/Button_Absent.svg";
import absentDisableIcon from "../assets/Icons/Button_Absent_Disable.svg";
import guestIcon from "../assets/Icons/guest.svg";
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
import { Popup } from "semantic-ui-react";

const queueItems = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

const statusButton = {
  hover: {
    scale: 1.1,
    textShadow: "0px, 0px, 8px, rgb(255,255,255)",
  },
};

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
  currentPosition,
}) => {
  const [isSending, setIsSending] = useState(false);
  const [showArrivalModal, setShowArrivalModal] = useState(false);
  const [showAbsentModal, setShowAbsentModal] = useState(false);
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [showMessagingModal, setShowMessagingModal] = useState(false);

  const arrivalFontActive = "#fff";
  const absenceFontActive = "#fff";
  const arrivalBorderActive = theme.colors.components.arrivalButton.borderColor.normal;
  const absenceBorderActive = theme.colors.components.absentButton.borderColor.normal;
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
  const labelsOfFirstNote = notes[0].split(",");

  const replaceIndex = [3, 4, 5, 6];
  const replaceWithAsterisk = (phoneNumber, indices) => {
    let res = "";
    res = indices
      .reduce((acc, val) => {
        acc[val] = "*";
        return acc;
      }, phoneNumber.split(""))
      .join("");
    return res;
  };
  const asteriskPhoneNumber = replaceWithAsterisk(phoneNumber, replaceIndex);

  return (
    <>
      <QueueItem
        active={_id === activeQueueId}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={queueItems}
        initial="before"
        animate="after"
      >
        {showQueueNotes && (
          <Popup trigger={<NoteButton>i</NoteButton>}>
            <HoverNotesContainer>
              <NotesBox>
                Notes:
                {labelsOfFirstNote.map((label, index) => (
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
                    {label}
                  </NewTag>
                ))}
              </NotesBox>
            </HoverNotesContainer>
          </Popup>
        )}
        <QueueDataContainer>
          <QueueDataNumber color="#000">
            <p>{queueNumber}</p>
          </QueueDataNumber>
          <QueueDataWrapper>
            <QueueData color="#000">
              <p>{name}</p>
            </QueueData>
            <QueueData color="#000">
              <p>{asteriskPhoneNumber}</p>
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
                color:
                  status === "Waiting" ? "#FFAB5D" : status === "Absent" ? "#E64848" : "#2EAD7C",
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
          </QueueDataWrapper>
          <QueueIconWrapper>
            <QueueData>
              <Popup
                trigger={
                  status === QUEUE_STATUS.WAITING ? (
                    <QueueIcon
                      src={messageIcon}
                      alt="message sending icon"
                      onClick={() => {
                        setShowMessagingModal(true);
                      }}
                    />
                  ) : (
                    <QueueIcon src={inactiveMessageIcon} alt="message sending icon" />
                  )
                }
              >
                <TooltipBox>Notify</TooltipBox>
              </Popup>
              <Popup
                trigger={
                  <QueueIcon
                    src={editIcon}
                    alt="add new form icon"
                    onClick={(e) => {
                      setShowAddNewForm(true);
                    }}
                  />
                }
              >
                <TooltipBox>Update</TooltipBox>
              </Popup>
            </QueueData>
            <QueueData>
              <StatusButton
                onClick={() => setShowArrivalModal(true)}
                disabled={isSending || status === QUEUE_STATUS.COMPLETED}
                fontColor={
                  isSending || status === QUEUE_STATUS.COMPLETED ? disableColor : arrivalFontActive
                }
                borderColor={
                  isSending || status === QUEUE_STATUS.COMPLETED
                    ? disableColor
                    : arrivalBorderActive
                }
                backgroundColor={
                  isSending || status === QUEUE_STATUS.COMPLETED
                    ? "#fff"
                    : theme.colors.components.arrivalButton.fontColor.normal
                }
                variants={statusButton}
                whileHover={!isSending && status !== QUEUE_STATUS.COMPLETED && "hover"}
              >
                {isSending || status === QUEUE_STATUS.COMPLETED ? (
                  <img src={arrivalDisableIcon} alt="arrivalIcon" />
                ) : (
                  <img src={arrivalActiveIcon} alt="arrivalIcon" />
                )}
                Arrived
              </StatusButton>
            </QueueData>
            <QueueData>
              <StatusButton
                onClick={() => setShowAbsentModal(true)}
                disabled={isSending || status === QUEUE_STATUS.ABSENT}
                fontColor={
                  isSending || status === QUEUE_STATUS.ABSENT ? disableColor : absenceFontActive
                }
                borderColor={
                  isSending || status === QUEUE_STATUS.ABSENT ? disableColor : absenceBorderActive
                }
                backgroundColor={
                  isSending || status === QUEUE_STATUS.ABSENT
                    ? "#fff"
                    : theme.colors.components.absentButton.fontColor.normal
                }
                variants={statusButton}
                whileHover={!isSending && status !== QUEUE_STATUS.ABSENT && "hover"}
              >
                {isSending || status === QUEUE_STATUS.ABSENT ? (
                  <img src={absentDisableIcon} alt="absenceIcon" />
                ) : (
                  <img src={absentActiveIcon} alt="absenceIcon" />
                )}
                Absent
              </StatusButton>
            </QueueData>
          </QueueIconWrapper>
        </QueueDataContainer>
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
          queueInFront={currentPosition}
        />
      )}
    </>
  );
};

export default SingleQueue;

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
  currentPosition: PropTypes.number.isRequired,
};
