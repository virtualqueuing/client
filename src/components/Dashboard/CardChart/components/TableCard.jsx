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
  width: 10%;
`;

const TableCard = ({ tableInfo }) => {
  return (
    <Wrapper>
      <Title>{tableInfo.tableType}</Title>
      <InfoCard number={tableInfo.averageNumber}>Average</InfoCard>
      <InfoCard number={tableInfo.maximumNumber}>Maximum</InfoCard>
    </Wrapper>
  );
};

export default TableCard;
