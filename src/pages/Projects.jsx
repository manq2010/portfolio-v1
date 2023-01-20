import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Projects | Portfolio</title>
    </Helmet>
    <main>
      <section>
        <h1 className="big-heading">Projects</h1>
      </section>
    </main>
  </Layout>
);

export default Projects;
