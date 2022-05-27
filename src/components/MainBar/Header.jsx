import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  height: 27vh;
  flex-direction: column;
`;

const Branding = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;
`;

const PathIdentifier = styled.div`
  position: relative;
  height: 30%;

  & > p {
    position: absolute;
    left: 120px;
    top: 50%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

const SeperateLine = styled.div`
  width: 98%;
  border: 1px solid #000;
  border-radius: 20%;
  margin: 0 1%;
`;

const QueueTitle = styled.div`
  /* position: relative; */
  height: 40%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Branding>
          <h1>Location</h1>
          <h1>Virtual Queuing</h1>
          <h1>Username</h1>
        </Branding>
        <PathIdentifier>
          <p>All Queue / Queueing / Completed Queue / Absent Queue</p>
        </PathIdentifier>
        <SeperateLine></SeperateLine>
        <QueueTitle>Testing</QueueTitle>
        <SeperateLine></SeperateLine>
      </StyledHeader>
    </>
  );
};

export default Header;
