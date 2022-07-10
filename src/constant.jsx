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
export const TeamMembers = [
  { name: "Roy", position: "Full-stack Developer" },
  { name: "Alfred", position: "Full-stack Developer" },
  { name: "Stephy", position: "Full-stack Developer" },
  { name: "Joe", position: "Full-stack Developer" },
  { name: "Ting", position: "Full-stack Developer" },
  { name: "Tianyu", position: "Full-stack Developer" },
];

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
  : "http://backend.virtualqueuing.net";

export const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`;

export const InputValidation = [
  {
    name: "email",
    errorMessage: "It should be a valid email address!",
  },
  {
    name: "Username",
    errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
  },
  {
    name: "Role",
    errorMessage: "Please choose a role!",
  },
  {
    name: "Branch",
    errorMessage: "Please choose a Branch!",
  },
  {
    name: "password",
    errorMessage: "Password should be 6-20 characters!",
  },
  {
    name: "confirmPassword",
    errorMessage: "Password Does not match!",
  },
];
