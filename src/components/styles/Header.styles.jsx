import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 27vh;
  flex-direction: column;
`;

export const Branding = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;
`;

export const PathIdentifier = styled.ul`
  display: flex;
  position: relative;
  height: 30%;
  align-items: flex-end;
  margin-left: 2.6%;
`;

export const Identifier = styled.li`
  list-style: none;
  &:not(:last-child):after {
    content: " /";
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const IdentifierLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.fontColor};
  ${(props) =>
    props.filter
      ? css`
          color: red;
        `
      : "none"};
`;

export const SeperateLine = styled.div`
  width: 98%;
  border: 1px solid #000;
  border-radius: 20%;
  margin: 0 1%;
`;

export const QueueTitle = styled.div`
  justify-content: space-between;
  /* position: relative; */
  height: 40%;
  display: flex;
  align-content: center;
  justify-content: center;
  & li {
    color: ${({ theme }) => theme.colors.main};
    font-size: ${({ theme }) => theme.fontSizes["1x"]};
    padding-top: 0.5vh;
    width: calc(100% / 6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OpenDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.fontColor};
  & p {
    margin-bottom: 5px;
  }
`;

export const TableFilter = styled.select`
  height: 100%;
  border: none;
  text-align: center ;
  background: none;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes["1x"]};
  &:focus {
    outline: none;
  }
`;
