import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CausesPage from "../components/causes/causes-page";
import Footer from "../components/footer";

const Causes = () => {
  return (
    <Layout pageTitle="Causes Page || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Causes Page" crumbTitle="Causes" />
      <CausesPage />
      <Footer />
    </Layout>
  );
};

export default Causes;
