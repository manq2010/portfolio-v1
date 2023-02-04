import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';
import Hero from '../components/Hero';

const Main = () => (
  <Layout>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
    <main>
      <Hero />
    </main>
  </Layout>
);

export default Main;
