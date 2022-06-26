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
export const Roles = ["Maneger", "Staff"];
export const Branches = ["Brisbane CBD", "Sunnybank", "Chermside"];
export const API_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://p3-back-lb-1729390372.ap-southeast-2.elb.amazonaws.com";
