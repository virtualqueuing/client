import logo from "../../assets/Logo-v5.svg";
import {
  StyledHeader,
  Branding,
  PathIdentifier,
  SeparateLine,
  QueueLeftTitle,
  QueueRightTitle,
  Identifier,
  IdentifierLink,
  TableFilter,
  PathContainer,
  PathSeparateLine,
  SearchBar,
  QueueTitleContainer
} from "../styles/Header.styles";
import { Logo } from "../styles/Logo";

const Header = ({ queueStatus, setQueueStatus, setTableType, tableType, setSearchQueue }) => {
  const queueFilter = ["All", "Queuing", "Absent"];

  const TableSize = ["Small", "Medium", "Large"];
  const changeTable = (size) => {
    const type =
      size.target.value === "Small"
        ? "Small"
        : size.target.value === "Medium"
        ? "Medium"
        : size.target.value === "Large"
        ? "Large"
        : "Table Type";
    setTableType(type);
  };

  return (
    <>
      <StyledHeader>
        <Branding>
          <Logo src={logo} alt="logo" />
        </Branding>
        <SeparateLine />
        <PathContainer>
          <PathIdentifier>
            {queueFilter.map((filter) => {
              return (
                <Identifier key={filter}>
                  <IdentifierLink
                    href={`/#${filter}`}
                    filter={queueStatus === filter}
                    onClick={() => setQueueStatus(filter)}
                  >{`${filter}`}</IdentifierLink>
                </Identifier>
              );
            })}
          </PathIdentifier>
          <form>
            <SearchBar type="search" placeholder="Search" onChange={(e) => {setSearchQueue(e.target.value)}} required/>
          </form>
        </PathContainer>
        <PathSeparateLine />
        <QueueTitleContainer>
          <QueueLeftTitle>
            <li>Queue No.</li>
            <li>Name</li>
            <li>Phone No.</li>
            <li>Guests</li>
            <li>
              {/* <TableFilter onChange={changeTable}>
                <option value="Table">Table Type</option>
                {TableSize.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </TableFilter> */}
              Table Size
            </li>
            <li>Status</li>
          </QueueLeftTitle>
          <QueueRightTitle>
            <li>Notify</li>
            <li>Edit</li>
          </QueueRightTitle>
        </QueueTitleContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
