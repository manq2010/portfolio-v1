import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About';
import Layout from '../Layout/Layout';

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About | Portfolio</title>
    </Helmet>
    <main>
      <About />
    </main>
  </Layout>
);

export default AboutPage;
