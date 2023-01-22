import React from 'react';
import { Helmet } from 'react-helmet';
import Education from '../components/Education';
import Layout from '../Layout/Layout';

const EducationPage = () => (
  <Layout>
    <Helmet>
      <title>Education</title>
    </Helmet>
    <main>
      <Education />
    </main>
  </Layout>
);

export default EducationPage;
