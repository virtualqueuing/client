import React from 'react';
import Container from "../components/Container";
import DashboardApp from "../components/Dashboard/DashboardApp";
import LeftSideNavbar from "../components/LeftSideNavbar";

const DashboardPage = () => {
  return (
    <Container>
      <LeftSideNavbar />
      <DashboardApp />
    </Container>
  );
};

export default DashboardPage;
