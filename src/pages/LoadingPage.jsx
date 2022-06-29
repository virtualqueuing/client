import React from "react";
import styled from "styled-components";
import FlexDisplay from "../components/MainHomepage/FlexDisplay";
import LoadingPic from "../assets/LoadingPic.png"

const LoaderContainer = styled(FlexDisplay)`
  width: 100vw;
  height: 100vh;
  /* background-image: linear-gradient(135deg, #f5f7fa 0%, #5F8C6A 500%); */
  font-size: 26px;
`;

const LoadingAnimation = styled.div`
  animation: rotate 3s linear infinite;
	height: 50px;
	transform-origin: bottom center;
  z-index: 1;
  position: absolute;
  top: 55%;
  @keyframes rotate {
    to {
		transform: rotate(360deg);
	  }
  }
`

const LoadingCircleOne = styled.div`
  animation: grow 1.5s linear infinite;
	background-color: #B5EAD7;
	border-radius: 50%;
	display: inline-block;
	margin: -10px;
	height: 40px;
	width: 40px;
	transform: scale(0);
`
const LoadingCircleTwo = styled(LoadingCircleOne)`
  animation-delay: .75s;
	background-color: #5F8C6A;
  @keyframes grow {
	50% {
		transform: scale(0.8);
	}
}
`

const LoadingContent = styled.div`
  font-family: 'Indie Flower', cursive;
  font-size: 2.5vw;
  margin-right: 5px;
`

const DotOne = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: black;
  margin: 0 5px;
  transform: scale(0);
  animation: dot .7s ease-in-out alternate .3s infinite;
  @keyframes dot{
    100%{
      transform: scale(1.5);
      box-shadow: 10px 10px 22px -2px rgba(0,0,0,0.25);
    }
  }
`
const DotTwo = styled(DotOne)`
  animation: dot .7s ease-in-out alternate .5s infinite;
`

const DotThree = styled(DotOne)`
  animation: dot .7s ease-in-out alternate .8s infinite;
`


const LoadingText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  z-index: 1;
  position: absolute;
  top: 60%;
`

const LoadingPageImage = styled.img`
  position: absolute;
  width: 30vw;
  height:auto;
  top: 0;`


LoaderContainer.displayName = "LoaderContainer";

const LoadingPage = () => (
  <section className="loadingPage">
    <LoaderContainer>
    <LoadingPageImage src={LoadingPic}/>
      <LoadingAnimation>
        <LoadingCircleOne />
        <LoadingCircleTwo />
      </LoadingAnimation>
      <LoadingText>
        <LoadingContent>Loading</LoadingContent>
        <DotOne />
        <DotTwo />
        <DotThree />
      </LoadingText>
    </LoaderContainer>
  </section>
);

export default LoadingPage;
