import Employee from "./assets/MainHomePageIcon/Employee.svg";
import Management from "./assets/MainHomePageIcon/ManagementIcon.svg";
import Insight from "./assets/MainHomePageIcon/Insight.svg";
import Reduce from "./assets/MainHomePageIcon/Reduce.svg";
import Savetime from "./assets/MainHomePageIcon/SaveTime.svg";

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
export const QUEUE_FILTER = ["All", "Queuing", "Absent"];
export const TABLE_SIZE = ["Small", "Medium", "Large"];
export const QUEUE_STATUS = {
  WAITING: "Waiting",
  COMPLETED: "Completed",
  ABSENT: "Absent",
}
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

export const Roles = ["Manager", "Staff"];
export const Branches = ["Brisbane CBD", "Sunnybank", "Chermside"];
export const API_URI =
  import.meta.env.DEV
    ? "http://localhost:3000"
    : "http://p3-back-lb-1729390372.ap-southeast-2.elb.amazonaws.com";
