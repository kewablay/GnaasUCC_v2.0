import React from "react";
import Developers from "../../components/Developers";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LocateUs from "../../components/LocateUs";
import Patrons from "../../components/Patrons";
import SocialMedia from "../../components/SocialMedia";
import UpcomingActivities from "../../components/UpcomingActivities";
import WeeklyActivities from "../../components/WeeklyActivities";
import Departments from "../../components/Departments";

function Homepage() {
  return (
    <div>
      <Layout>
        <Header />
        <WeeklyActivities />
        <UpcomingActivities />
        <Departments />
        <Patrons />
        <LocateUs />
        <SocialMedia />
        <Developers />
      </Layout>
    </div>
  );
}

export default Homepage;
