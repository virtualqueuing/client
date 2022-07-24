import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 8vh;
  width: 10vh;
  padding: 1vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 3px solid rgba(93, 86, 112, 0.7);
  border-radius: 10%;
`;

const CardNumber = styled.div`
  text-align: center;
  width: 30%;
  font-size: 25px;
`;

const CardDescription = styled.div`
  font-size: 15px;
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
