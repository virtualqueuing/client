import styled, { css } from "styled-components";
import dashboard from "../../assets/MainHomePageIcon/FlowChart/dashboard.gif";
import queueList from "../../assets/MainHomePageIcon/FlowChart/queue-list.gif";
import notify from "../../assets/MainHomePageIcon/FlowChart/notify.gif";
import FlexDisplay from "./FlexDisplay";

const Introduction = styled(FlexDisplay)`
  justify-content: space-around;
  flex-wrap: wrap;
  width: 75vw;
  background-color: #fff;

  @media (max-width: 1024px) {
    width: 85vw;
    flex-direction: row;
  }
`;

const FlowchartImage = styled.img`
  width: 60vw;
  height: auto;
  margin-bottom: 20px;
  border-radius: 25px;

  ${({ BorderCorlor }) => {
    switch (BorderCorlor) {
      case "blue":
        return css`
          border: 10px solid #7cc7da;
        `;
      case "grey":
        return css`
          border: 10px solid #b1a6b6;
        `;
      case "green":
        return css`
          border: 10px solid #b3a777;
        `;
      default:
        return css``;
    }
  }}
`;

const Description = styled.div`
  width: 40vw;
  height: auto;
  text-align: center;
  margin-bottom: 100px;

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

const FlowchartIntroduction = () => (
  <>
    <Introduction>
      <FlowchartImage BorderCorlor="blue" src={queueList} alt="dashboard demo image" />
      <Description>
        <h1>Easy to Manage</h1>
        <h2>
          With all the features Virtual Queuign provide, your staff can easily manage queuing list
          just by one click.
        </h2>
      </Description>
    </Introduction>
    <Introduction>
      <FlowchartImage BorderCorlor="grey" src={dashboard} alt="dashboard demo image" />
      <Description>
        <h1>Better Analytics</h1>
        <h2>Your company can analyse queuing data to improve the service.</h2>
      </Description>
    </Introduction>
    <Introduction>
      <FlowchartImage BorderCorlor="green" src={notify} alt="dashboard demo image" />
      <Description>
        <h1>Timely SMS</h1>
        <h2>
          Virtural Queuing web app can easily send SMS message timely to notify your customer.
        </h2>
      </Description>
    </Introduction>
  </>
);

export default FlowchartIntroduction;
