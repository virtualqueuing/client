import Employee from "./assets/MainHomePageIcon/Employee.svg";
import Management from "./assets/MainHomePageIcon/ManagementIcon.svg";
import Insight from "./assets/MainHomePageIcon/Insight.svg";
import Reduce from "./assets/MainHomePageIcon/Reduce.svg";
import Savetime from "./assets/MainHomePageIcon/SaveTime.svg";
import BirthdayIcon from "./assets/Icons/Note_Birthday.svg";
import WheelChairIcon from "./assets/Icons/Note_WheelChair.svg";
import HighchairIcon from "./assets/Icons/Baby.svg";

export const TAG_COLORLIST = [
  "#86E3CE",
  "#D0E6A5",
  "#FFDD94",
  "#FA897B",
  "#CCABDB",
  "#B5EAD7",
  "#E2F0CB",
];
export const OPTION_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const ABSENT_REASONS = [
  "No show without a reason",
  "Rescheduling",
  "Delayed",
  "Other Reasons",
];
export const QUEUE_FILTER = ["All", "Queuing", "Absent"];
export const TABLE_SIZE = ["Small", "Medium", "Large"];
export const QUEUE_STATUS = {
  ALL: "All",
  WAITING: "Waiting",
  COMPLETED: "Completed",
  ABSENT: "Absent",
};

export const QueueAdvantage = [
  { icon: Employee, description: "Improve employee productivity" },
  { icon: Management, description: "Streamline lobby management" },
  { icon: Insight, description: "Gain customer insights" },
  { icon: Reduce, description: "Reduce customer walkaways" },
  { icon: Savetime, description: "Increase customer lifetime value" },
];

export const NoteIcon = {
  Birthday: BirthdayIcon,
  Wheelchair: WheelChairIcon,
  Highchair: HighchairIcon,
};

export const Roles = ["Manager", "Staff"];
export const Branches = ["Brisbane CBD", "Sunnybank", "Chermside"];
export const API_URI = import.meta.env.DEV
  ? "http://localhost:3000"
  : `${import.meta.env.VITE_SERVER_URL}`;

export const chartAnimation = {
  before: {
    opacity: 0,
    x: "100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "tween",
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.04,
  },
};
