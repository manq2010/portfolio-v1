import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';
import Skills from '../components/Projects';

const SkillsPage = () => (
  <Layout>
    <Helmet>
      <title>Skills | Portfolio</title>
    </Helmet>
    <main>
      <Skills />
    </main>
  </Layout>
);

export default SkillsPage;
