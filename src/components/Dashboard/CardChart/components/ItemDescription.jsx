import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 1.2vw;
`;

const Title = styled.div`
  width: 18%;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
`;

const CardDescription = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 12vh;
  color: rgba(0, 0, 0, 0.4);
`;

const ItemDescription = () => (
  <Wrapper>
    <Title>Type</Title>
    <CardDescription>Average</CardDescription>
    <CardDescription>Maximum</CardDescription>
  </Wrapper>
);

export default ItemDescription;
