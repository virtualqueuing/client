import isEmpty from "lodash/isEmpty";
import SingleQueue from "../SingleQueue";
import { QueueListContainer, QueueSection } from "../styles/QueueList.styles";
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { QUEUE_STATUS } from "../../constant";
import { indexOf } from "lodash";

const MainQueues = ({ queues, queueStatus, tableType, searchQueue, setQueues }) => {
  const waitingQueue = queues.filter((queue) => queue.status === QUEUE_STATUS.WAITING);

  let showList = [];
  if (queueStatus === "All") {
    showList = queues;
  } else if (queueStatus === "Queuing") {
    showList = queues.filter((queue) => queue.status === QUEUE_STATUS.WAITING);
  } else if (queueStatus === "Absent") {
    showList = queues.filter((queue) => queue.status === QUEUE_STATUS.ABSENT);
  }

  if (!isEmpty(showList)) {
    showList =
      tableType === "Table Type"
        ? showList
        : showList.filter((queue) => queue.tableSize === tableType);
  }

  const [activeQueueId, setActiveQueueId] = useState("");
  const singleQueues = useMemo(
    () =>
      showList
        .filter((queueValue) => {
          if (searchQueue === "") {
            return queueValue;
          } else if (
            queueValue.name.toLowerCase().includes(searchQueue.toLowerCase()) ||
            queueValue.phoneNumber.includes(searchQueue)
          ) {
            return queueValue;
          }
        })
        .map((queue) => (
          <SingleQueue
            key={queue._id}
            {...queue}
            activeQueueId={activeQueueId}
            setActiveQueueId={setActiveQueueId}
            setQueues={setQueues}
            currentPosition={
              queue.status === QUEUE_STATUS.WAITING
                ? waitingQueue
                    .map((e) => {
                      return e._id;
                    })
                    .indexOf(queue._id)
                : 0
            }
          />
        )),
    [showList, activeQueueId, searchQueue]
  );

  //Stephy

  const forHidden = showList.map((item) => {
    return item.phoneNumber;
  });
  console.log(typeof forHidden);
  console.log(forHidden);

  const grab = forHidden.forEach((hide) => {
    console.log(hide);
    // return hide;
  });
  // console.log(grab);
  // const [star, setStar] = useState();
  // forHidden.forEach((hide) => {
  //   return hide;
  // });
  // console.log(grab);

  // const arr = [4, 7, 8];
  // const replceWithAsterisk = (grab, indices) => {
  //   let res = "";
  //   res = indices
  //     .reduce((acc, val) => {
  //       acc[val] = "*";
  //       return acc;
  //     }, grab.split(""))
  //     .join("");
  //   return res;
  // };
  // console.log(replceWithAsterisk(grab, arr));

  // forHidden.forEach((hide) => {
  //   replceWithAsterisk;
  // });

  // console.log(replceWithAsterisk);

  // const test3 = forHidden.forEach(() => {
  //   return indexOf;
  // });
  // const test2 = forHidden.map((per) => {
  //   return per;
  // });

  // const test = test2.split(",");
  // const every = forHidden.forEach();
  // console.log(every);

  console.log("start");
  // console.log(test3);
  // console.log(test);
  // console.log(test2);
  console.log(forHidden);
  console.log(showList);
  // let cellPhone = [];
  // const cellPhone = showList?.phoneNumber;
  // how to get a collectionof of value of a certain property from an objuect array?
  // console.log(cellPhone);

  // setQueueGetting(queueValue),

  // const [queueGetting,setQueueGetting]=useState()
  console.log(singleQueues);
  // console.log(setQueueGetting);
  // console.log(queueGetting);
  console.log("done");
  //Stephy

  return (
    <QueueSection>
      <QueueListContainer>{singleQueues}</QueueListContainer>
    </QueueSection>
  );
};

export default MainQueues;

MainQueues.propTypes = {
  queues: PropTypes.array.isRequired,
  tableType: PropTypes.string.isRequired,
  searchQueue: PropTypes.string.isRequired,
  queueStatus: PropTypes.string.isRequired,
  setQueues: PropTypes.func.isRequired,
};
