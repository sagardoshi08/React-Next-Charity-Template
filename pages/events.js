import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EventPage from "../components/event/event-page";
import Footer from "../components/footer";

const Events = () => {
  return (
    <Layout pageTitle="Events Page || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Events" crumbTitle="Events" />
      <EventPage />
      <Footer />
    </Layout>
  );
};

export default Events;
