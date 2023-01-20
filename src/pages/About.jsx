import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';

const About = () => (
  <Layout>
    <Helmet>
      <title>About | Portfolio</title>
    </Helmet>
    <main>
      <section>
        <h1 className="big-heading">About</h1>
        <hr />
      </section>
    </main>
  </Layout>
);

export default About;
