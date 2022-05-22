import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: block;
  font-size: 26px;
`;
LoaderContainer.displayName = "LoaderContainer";

const LoadingPage = () => (
  <section className="loadingPage">
    <LoaderContainer>Loading</LoaderContainer>
  </section>
);

export default LoadingPage;
