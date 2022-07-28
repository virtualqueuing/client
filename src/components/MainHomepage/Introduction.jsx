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
  text-align: center;

  & > h1 {
    font-size: 2.5rem;
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 300;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }
`;

const HomeIntroduction = () => (
  <Introduction>
    <Description>
      <h1>Better Management Better Experience</h1>
      <h2>
        Virtual Queuing allows your company to easily manage queuing list, increase working
        efficiency, enhance customer relationship, and improve user satisfaction and trust.
      </h2>
    </Description>
    <QueueImage src={queue} alt="Queue" />
  </Introduction>
);

export default HomeIntroduction;
