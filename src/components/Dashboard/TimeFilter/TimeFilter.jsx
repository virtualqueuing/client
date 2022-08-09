import React from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import ChartData from "../../../assets/data/data";

const Wrapper = styled.div`
  width: 15vw;
  height: 2vw;
  position: absolute;
  right: 5%;
  top: -7%;
  background-color: #fff;
`;
const options = [
  { key: 1, text: "LastWeek", value: 1 },
  { key: 2, text: "LastTwoWeeks", value: 2 },
  { key: 3, text: "LastMonth", value: 3 },
];

const CustomDropDawn = styled(Dropdown)`
  width: 100%;
  height: 100%;
`;

const TimeFilter = ({ setDatabase }) => {
  return (
    <Wrapper>
      <CustomDropDawn
        options={options}
        selection
        placeholder="LastWeek"
        onChange={(e) => {
          const time = e.target.innerText;
          console.log(time);
          if (time === "LastWeek" || time === "LastTwoWeeks" || time === "LastMonth") {
            setDatabase(ChartData[time]);
          }
        }}
      ></CustomDropDawn>
    </Wrapper>
  );
};

export default TimeFilter;
