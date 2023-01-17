import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div id="content">
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
