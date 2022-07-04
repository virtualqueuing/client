import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { TeamMembers } from "../../constant";
import { Profile, PersonalInfo, Avartar } from "./Profile";
import React from "react";
import FlexDisplay from "./FlexDisplay";

const AboutUs = styled(FlexDisplay)`
  width: 100%;
  background-color: #fff;
`;

const Team = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 40px;
  flex-wrap: wrap;
`;

const Aboutus = React.forwardRef((props, ref) => {
  return (
    <AboutUs ref={ref}>
      <SectionTitle>About Us</SectionTitle>
      <Team>
        {TeamMembers.map((member) => (
          <Profile key={member.name}>
            <Avartar>
              <img src={member.avatar} alt={member.name} />
            </Avartar>
            <PersonalInfo>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </PersonalInfo>
          </Profile>
        ))}
      </Team>
    </AboutUs>
  );
});

Aboutus.displayName = "Aboutus";
export default Aboutus;
