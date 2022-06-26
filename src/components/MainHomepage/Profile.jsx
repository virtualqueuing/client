import styled from "styled-components";
import FlexDisplay from "./FlexDisplay";

export const Profile = styled(FlexDisplay)`
  margin: 20px;
  width: 150px;
`;

export const PersonalInfo = styled(FlexDisplay)`
  text-align: center;
`;

export const Avartar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #2ead7c;
  background-color: #fff;
`;
