import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { Profile, PersonalInfo, Avartar } from "./Profile";
import React from "react";
import FlexDisplay from "./FlexDisplay";
import linkedInIcon from "../../assets/linkedin-box-fill.svg";
import { Developers, DevOps } from "./AboutUsTeams";
import emailIcon from "../../assets/emailIcon.svg";
import PropTypes from "prop-types";

const AboutUs = styled(FlexDisplay)`
  width: 100%;
  background-color: #fff;
`;

const Team = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px;
  flex-wrap: wrap;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;

  & > h3 {
    margin-top: 10px;
    margin-bottom: 0;
  }

  & > a > img {
    height: 25px;
    padding: 2px 6px 0;
    margin-top: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px);
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

const Aboutus = React.forwardRef((props, ref) => {
  return (
    <AboutUs ref={ref}>
      <SectionTitle>About Us</SectionTitle>
      <Team>
        {Developers.map((member) => (
          <Profile key={member.name}>
            <Avartar>
              <img src={member.avatar} alt={member.name} />
            </Avartar>
            <PersonalInfo>
              <NameWrapper>
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img src={linkedInIcon} alt="linkedin icon for redirecting" />
                </a>
                <a href={member.email} target="_blank" rel="noreferrer">
                  <img src={emailIcon} alt="email icon for seinding email" />
                </a>
                <h3>{member.name}</h3>
              </NameWrapper>
              <p>{member.position}</p>
            </PersonalInfo>
          </Profile>
        ))}
      </Team>
      <Team>
        {DevOps.map((member) => (
          <Profile key={member.name}>
            <Avartar>
              <img src={member.avatar} alt={member.name} />
            </Avartar>
            <PersonalInfo>
              <NameWrapper>
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img src={linkedInIcon} alt="linkedin icon for redirecting" />
                </a>
                <a href={member.email} target="_blank" rel="noreferrer">
                  <img src={emailIcon} alt="email icon for seinding email" />
                </a>
                <h3>{member.name}</h3>
              </NameWrapper>
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

Developers.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

DevOps.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
