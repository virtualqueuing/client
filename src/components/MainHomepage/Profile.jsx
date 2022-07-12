import styled from "styled-components";
import FlexDisplay from "./FlexDisplay";

export const Profile = styled(FlexDisplay)`
  margin: 20px;
  width: 180px;
`;

export const PersonalInfo = styled(FlexDisplay)`
  text-align: center;

  & > p {
    margin: 8px 0 16px 0;
  }
`;

export const Avartar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #2ead7c;
  background-color: #fff;
  overflow: hidden;
  & > img {
    width: 100px;
    height: auto;
  }
`;
