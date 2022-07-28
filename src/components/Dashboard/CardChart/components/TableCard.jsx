import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  padding-left: 1vw;
  width: 10%;
  font-size: 20px;
  margin-right: 2.5vw;
  color: #ff8042;
`;

const TableCard = ({ tableInfo }) => {
  return (
    <Wrapper>
      <Title>{tableInfo.tableType}</Title>
      <InfoCard number={tableInfo.averageNumber}>mins</InfoCard>
      <InfoCard number={tableInfo.maximumNumber}>mins</InfoCard>
    </Wrapper>
  );
};

export default TableCard;
