import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/Layout';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => (
  <Layout>
    <Helmet>
      <title>Testimonials | Portfolio</title>
    </Helmet>
    <main>
      <Testimonials />
    </main>
  </Layout>
);

export default TestimonialsPage;
