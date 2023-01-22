import React from 'react';
import { Helmet } from 'react-helmet';
import Experience from '../components/Experience';
import Layout from '../Layout/Layout';

const ExperiencePage = () => (
  <Layout>
    <Helmet>
      <title>Experience | Portfolio</title>
    </Helmet>
    <main>
      <Experience />
    </main>
  </Layout>
);

export default ExperiencePage;
