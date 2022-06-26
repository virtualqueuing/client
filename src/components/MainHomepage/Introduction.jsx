import styled from "styled-components"
import queue from "../../assets/Queue.jpeg";
import FlexDisplay from "./FlexDisplay";

const Introduction = styled(FlexDisplay)`
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`

const QueueImage = styled.img`
    width: 60vw;
    height: auto;
    @media (max-width: 800px) {
        width: 80vw;
    } 
`

const Description = styled.div`
    width: 30vw;
    height: auto;
    @media (max-width: 800px) {
        width: 80vw;
    } 
`

const HomeIntroduction = () => (
    <Introduction>
        <Description>
            <h1>Restaurant Queue</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, numquam minima! Nemo mollitia, magnam numquam asperiores dolor placeat laudantium quos? Nobis fuga eos libero, cumque illo est amet in nemo?</p>
        </Description>
        <QueueImage src={queue} alt="Queue" />
    </Introduction>
)

export default HomeIntroduction;