import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 6vh;
  width: 12vh;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  border: 2px solid rgba(93, 86, 112, 0.2);
  border-radius: 10%;
`;

const CardNumber = styled.div`
  text-align: center;
  font-size: 24px;
  color: #e54848;
`;

const CardDescription = styled.span`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;

const InfoCard = ({ number, children }) => {
  return (
    <Wrapper>
      <CardNumber>{number}</CardNumber>
      <CardDescription>{children}</CardDescription>
    </Wrapper>
  );
};

export default InfoCard;
