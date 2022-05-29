import {
  StyledHeader,
  Branding,
  PathIdentifier,
  SeperateLine,
  QueueTitle,
} from "../styles/Header.styles";

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
