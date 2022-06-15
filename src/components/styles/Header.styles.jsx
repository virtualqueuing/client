import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 27vh;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Branding = styled.div`
  height: 36%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 130px;
`;

export const PathContainer = styled.div`
  /* width: 0%; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 30%;
  /* margin-top: 3%; */
  /* margin: 3% 3% 0 3%; */
  margin: 3% 3% 0;
  /* padding-bottom: 2%; */
`

export const PathIdentifier = styled.ul`
  width: 25%;
  display: flex;
  position: relative;
  /* height: 30%; */
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 2.5%;
  /* margin: 0; */
  /* margin-left: 2.6%; */
`;

export const Identifier = styled.li`
  list-style: none;
  /* &:not(:last-child):after {
    content: " /";
    color: ${({ theme }) => theme.colors.fontColor};
  } */
`;

export const IdentifierLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #9a9a9a;
  /* ${(props) =>
    props.filter
      ? css`
          color: red;
        `
      : "none"}; */
`;

export const SearchBar = styled.input`
width: 246px;
  margin-bottom: 3%;
  border: 1px solid #C4C4C4;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 8px;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const PathSeparateLine = styled.div`
  /* width: %; */
  border: 2px solid #DFDFDF;
  /* border-radius: 20%; */
  margin: 0 3%;
`;

export const SeparateLine = styled.div`
  /* width: %; */
  border: 2px solid #DFDFDF;
  /* border-radius: 20%; */
  margin: 0 1.2%;
`;

export const QueueTitleContainer = styled.div`
  height: 30%;
  margin: 1.5% 2% 0;
  border: 1px solid transparent;
  background: #F7F7F7;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const QueueLeftTitle = styled.ul`
  /* justify-content: space-between; */
  /* position: relative; */
  /* height: 30%; */
  margin: 0;
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  /* align-content: center; */
  /* justify-content: center; */
  /* border: 1px solid black; */
  & li {
    color: rgba(93, 86, 112, 0.7);
    /* font-size: ${({ theme }) => theme.fontSizes["1x"]}; */
    font-size: 15px;
    font-weight: 700;
    /* padding-top: 0.5vh; */
    width: calc(100% / 6);
    list-style: none;
    text-align: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
`;

export const QueueRightTitle = styled.ul`
  /* justify-content: space-between; */
  /* position: relative; */
  /* height: 30%; */
  margin: 0;
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  /* align-content: center; */
  /* justify-content: center; */
  /* border: 1px solid black; */
  & li {
    color: rgba(93, 86, 112, 0.7);
    /* font-size: ${({ theme }) => theme.fontSizes["1x"]}; */
    font-size: 15px;
    font-weight: 700;
    /* padding-top: 0.5vh; */
    width: calc(100% / 2);
    list-style: none;
    text-align: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
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
  text-align: center;
  background: none;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes["1x"]};
  &:focus {
    outline: none;
  }
`;
