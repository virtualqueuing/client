import logo from "../../assets/Logo-v5.svg";
import {
  StyledHeader,
  Branding,
  PathIdentifier,
  SeperateLine,
  QueueTitle,
  // OpenDate,
  Identifier,
  IdentifierLink,
} from "../styles/Header.styles";
import { Logo } from "../styles/Logo";

const Header = ({ queueStatus, setQueueStatus }) => {
  const queueFilter = ["All", "Queuing", "Completed", "Absent"];
  // const current = new Date();
  // const date = `${current.toDateString()}`;
  return (
    <>
      <StyledHeader>
        <Branding>
          <h1>Location</h1>
          <Logo src={logo} alt="logo" />
          <h1>Username</h1>
        </Branding>
        <PathIdentifier>
          {queueFilter.map((filter) => {
            return (
              <Identifier key={filter}>
                <IdentifierLink
                  href={`/#${filter}`}
                  filter={queueStatus === filter}
                  onClick={() => setQueueStatus(filter)}
                >{`${filter} Queues`}</IdentifierLink>
              </Identifier>
            );
          })}
        </PathIdentifier>
        <SeperateLine></SeperateLine>
        <QueueTitle>
          <li>Name</li>
          <li>Phone No.</li>
          <li>Queue No.</li>
          <li>Guests</li>
          <li>Table Size</li>
          <li>Status</li>
        </QueueTitle>
        {/* <OpenDate>
          <p>{date}</p>
        </OpenDate> */}
        <SeperateLine></SeperateLine>
      </StyledHeader>
    </>
  );
};

export default Header;
