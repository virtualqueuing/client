import {
  StyledHeader,
  PathIdentifier,
  SeparateLine,
  Identifier,
  IdentifierLink,
  TableFilter,
  PathContainer,
  PathSeparateLine,
  SearchBar,
  QueueTitleContainer,
  QueueTitle,
  QueueTitleNo,
} from "../styles/Header.styles";
import { QUEUE_FILTER, TABLE_SIZE } from "../../constant";
import { useMemo } from "react";
import Logo from "../Logo";

const Header = ({ queueStatus, setQueueStatus, setTableType, setSearchQueue }) => {
  const changeTable = (size) => {
    const type = TABLE_SIZE.includes(size.target.value) ? size.target.value : "Table Type";
    setTableType(type);
  };
  const queuesFilter = useMemo(
    () =>
      QUEUE_FILTER.map((filter) => (
        <Identifier key={filter}>
          <IdentifierLink
            href={`#${filter}`}
            data-filter={queueStatus === filter}
            onClick={() => setQueueStatus(filter)}
          >
            {`${filter}`}
          </IdentifierLink>
        </Identifier>
      )),
    [QUEUE_FILTER, queueStatus]
  );
  return (
    <>
      <StyledHeader>
        <Logo
          style={{ width: "150px", height: "auto" }}
          path="/"
          alt="logo for redirecting to main page"
        />
        <SeparateLine />
        <PathContainer>
          <PathIdentifier>{queuesFilter}</PathIdentifier>
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
          <QueueTitleNo>Queue No.</QueueTitleNo>
          <QueueTitle>Name</QueueTitle>
          <QueueTitle>Phone No.</QueueTitle>
          <QueueTitle>Guests</QueueTitle>
          <QueueTitle>
            {
              <TableFilter onChange={changeTable}>
                <option value="Table">Table Type</option>
                {TABLE_SIZE.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </TableFilter>
            }
          </QueueTitle>
          <QueueTitle>Status</QueueTitle>
          <QueueTitle>
            <li>Notify</li>
            <li>Edit</li>
          </QueueTitle>
        </QueueTitleContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
