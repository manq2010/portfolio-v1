import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';
import Projects from '../components/Projects';

const ProjectsPage = () => (
  <Layout>
    <Helmet>
      <title>Projects | Portfolio</title>
    </Helmet>
    <main>
      <Projects />
    </main>
  </Layout>
);

export default ProjectsPage;
