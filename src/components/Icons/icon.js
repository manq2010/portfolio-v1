import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconTwitter,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGitHub />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
