import React from "react";
import EventHeader from "../../components/EventHeader";
import EventList from "../../components/EventList";
import Layout from "../../components/Layout";

function EventsPage() {
  return (
    <Layout>
      <div className="mainContainer">
        <EventHeader />
        <EventList />
      </div>
    </Layout>
  );
}

export default EventsPage;
