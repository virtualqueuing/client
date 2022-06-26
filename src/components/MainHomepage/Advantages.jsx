import styled from "styled-components";
import { QueueAdvantage } from "../../constant";
import SectionTitle from "./SectionTitle";
import { Profile, PersonalInfo } from "./Profile";
import FlexDisplay from "./FlexDisplay";

const Advantange = styled(FlexDisplay)`
    width: 100vw;
    height: auto;
`

const AdvantageList = styled(FlexDisplay)`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    padding: 50px 0;
`

const AdvantangeIcons = styled.img`
    width: 50px;
    height: 50px;

`

const Advantanges = () => (
    <Advantange>
        <SectionTitle>Advantages</SectionTitle>
        <AdvantageList>
            {QueueAdvantage.map((advantage, index) => (
                <Profile key={index}>
                    <AdvantangeIcons key={index} src={advantage.icon} alt="icons" />
                    <PersonalInfo>
                        <p>{advantage.description}</p>
                    </PersonalInfo>
                </Profile>
            ))}
        </AdvantageList>
    </Advantange>
)

export default Advantanges