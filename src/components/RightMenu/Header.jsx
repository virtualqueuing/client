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
  QueueTitleContainer,
} from "../styles/Header.styles";
import { Logo } from "../styles/Logo";
import { QUEUE_FILTER, TABLE_SIZE } from "../../constant";
import { useMemo } from "react";

const Header = ({ queueStatus, setQueueStatus, setTableType, setSearchQueue }) => {
  const changeTable = (size) => {
    const type = TABLE_SIZE.includes(size.target.value) ? size.target.value : "Table Type";
    setTableType(type);
  };
  const queuesFilter = useMemo(() => 
    QUEUE_FILTER.map((filter) => (
      <Identifier key={filter}>
        <IdentifierLink
          href={`#${filter}`}
          filter={queueStatus === filter}
          onClick={() => setQueueStatus(filter)}
        >
          {`${filter}`}
        </IdentifierLink>
      </Identifier>
    )), [QUEUE_FILTER, queueStatus]
  )
  return (
    <>
      <StyledHeader>
        <Branding>
          <Logo src={logo} alt="logo" />
        </Branding>
        <SeparateLine />
        <PathContainer>
          <PathIdentifier>
            {queuesFilter}
          </PathIdentifier>
          <form>
            <SearchBar
              type="search"
              placeholder="Name or Phone No."
              onChange={(e) => {
                setSearchQueue(e.target.value);
              }}
              required
            />
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
              {
                <TableFilter onChange={changeTable}>
                  <option value="Table">Table Type</option>
                  {TABLE_SIZE.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </TableFilter>
              }
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
