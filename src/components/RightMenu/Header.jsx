import logo from "../../assets/Logo.svg";
import {
  StyledHeader,
  Branding,
  PathIdentifier,
  SeperateLine,
  QueueTitle,
  OpenDate,
  Identifier,
  IdentifierLink
} from "../styles/Header.styles";
import { Logo } from "../styles/Logo";

const Header = ({typed, changeType}) => {
  const types = ["All", "Queuing", "Completed", "Absent"];
  const current = new Date();
  const date = `${current.toDateString()}`;
  return (
    <>
      <StyledHeader>
        <Branding>
          <h1>Location</h1>
          <Logo src={logo} alt="logo" />
          <h1>Username</h1>
        </Branding>
        <PathIdentifier>
          {types.map((type) => {
            return (
              <Identifier key={type}>
                <IdentifierLink href={`/#${type}`} type={typed===type} onClick={() => changeType(type)}>{`${type} Queues`}</IdentifierLink>
              </Identifier>
            )
          })}
        </PathIdentifier>
        <SeperateLine></SeperateLine>
        <QueueTitle>
          <li>Name</li>
          <li>Phone No.</li>
          <li>Location</li>
          <li>Queue No.</li>
          <li>Guest</li>
          <li>Table</li>
          <li>Type</li>
          <li>State</li>
        </QueueTitle>
        <OpenDate>
          <p>{date}</p>
        </OpenDate>
        <SeperateLine></SeperateLine>
      </StyledHeader>
    </>
  );
};

export default Header;
