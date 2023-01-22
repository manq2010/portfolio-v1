import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact';
import Layout from '../Layout/Layout';

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Contact | Porfolio</title>
    </Helmet>
    <main>
      <Contact />
    </main>
  </Layout>
);

export default ContactPage;
