import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';

const Main = () => (
  <Layout>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
    <main>
      <h1 className="big-heading">Main</h1>
      <hr />
      <section />
    </main>
  </Layout>
);

export default Main;
