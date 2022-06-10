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
  TableFilter,
} from "../styles/Header.styles";
import { Logo } from "../styles/Logo";

const Header = ({ queueStatus, setQueueStatus, setTableType, tableType }) => {
  const queueFilter = ["All", "Queuing", "Completed", "Absent"];
  // const current = new Date();
  // const date = `${current.toDateString()}`;
  
  const TableSize = ["Small", "Medium", "Large"];
  const changeTable=(size)=>{
    const type = size.target.value === "Small" ? "Small" 
    : size.target.value === "Medium" ? "Medium"
    : size.target.value === "Large" ? "Large"
    : "Table Type"
    setTableType(type);
  }

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
          <li>Queue No.</li>
          <li>Name</li>
          <li>Phone No.</li>
          <li>Guests</li>
          <li>
            <TableFilter onChange={changeTable}>
              <option value="Table">Table Type</option>
              {TableSize.map((size) => (
                <option key={size}>
                {size}
                </option>
              ))}
            </TableFilter>
          </li>
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
