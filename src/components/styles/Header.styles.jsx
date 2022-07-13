import styled, { css } from "styled-components";
import { QueueData } from "./SingleQueue.styles";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 27vh;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const PathContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 35%;
  margin: 0 3% 0;
`;

export const PathIdentifier = styled.ul`
  width: 25%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 1%;
  margin: 15px 0 0 0;
  position: relative;
  top: 4%;
`;

export const Identifier = styled.li`
  list-style: none;
`;

export const IdentifierLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: block;
  padding-bottom: 16px;
  width: 85px;
  text-align: center;
  color: ${({ theme }) => theme.colors.fonts.inactiveMenu};
  ${({ "data-filter": dataFilter }) =>
    dataFilter
      ? css`
          color: ${({ theme }) => theme.colors.components.negativeButton.outline};
          border-bottom: 4px solid ${({ theme }) => theme.colors.components.negativeButton.outline};
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        `
      : ""};
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const SearchBar = styled.input`
  width: 246px;
  margin-bottom: 3%;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 8px;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const PathSeparateLine = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.separateLine.main};
  margin: 0 3%;
`;

export const SeparateLine = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.separateLine.main};
  margin: 0 1.2%;
`;

export const QueueTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  margin: 0.5% 2% 0;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.components.queueContainer.background};
  border-radius: 5px;
  display: flex;
  justify-content: left;
  @media (max-width: 1500px) {
    padding: 10px 0;
    margin: 1% 2%;
  }
`;

export const QueueTitle = styled(QueueData)`
  color: ${({ theme }) => theme.colors.components.arrivalButton.borderColor.opacityColor};
  font-size: 15px;
  font-weight: 700;
  padding: 0;

  & > li {
    list-style-type: none;
  }
`;

export const QueueTitleNo = styled(QueueTitle)`
  margin-left: 10px;
  width: 80px;
  justify-content: center;
`;

export const TableFilter = styled.select`
  height: 100%;
  border: none;
  text-align: center;
  background: none;
  color: ${({ theme }) => theme.colors.components.arrivalButton.borderColor.opacityColor};
  font-size: inherit;
  font-weight: inherit;

  &:focus {
    outline: none;
  }
  @media (max-width: 1500px) {
    font-size: 0.75rem;
  }
`;
