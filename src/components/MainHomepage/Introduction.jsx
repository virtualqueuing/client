import styled from "styled-components";
import queue from "../../assets/Queue.jpeg";
import FlexDisplay from "./FlexDisplay";

const Introduction = styled(FlexDisplay)`
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75vw;
  height: 100vh;
  background-color: #fff;
  padding-top: 60px;

  @media (max-width: 1024px) {
    width: 85vw;
    flex-direction: row;
  }
`;

const QueueImage = styled.img`
  width: 45vw;
  height: auto;
  @media (max-width: 1024px) {
    width: 60vw;
  }
`;

const Description = styled.div`
  width: 25vw;
  height: auto;
  text-align: left;

  & > h1 {
    font-size: 1.5rem;
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }
`;

const HomeIntroduction = () => (
  <Introduction>
    <Description>
      <h1>Restaurant Queue Management</h1>
      <h2>Improve your customer&apos;s waiting experience:</h2>
      <ul>
        <li>Eliminate traditional, frustrating standing queues</li>
        <li>Notify customers queuing status via SMS message</li>
        <li>Reduce perceived waiting times and improve customer experience</li>
        <li>
          Create queue efficiencies with staff members servicing the best matched customer based on
          their service selection
        </li>
      </ul>
    </Description>
    <QueueImage src={queue} alt="Queue" />
  </Introduction>
);

export default HomeIntroduction;
