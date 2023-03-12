import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconTwitter,
  IconHome,
  IconAbout,
  IconEducation,
  IconExperience,
  IconProjects,
  IconContact,
  IconLogo,
  IconClose,
  IconHamburger,
  IconTestimonial,
  IconSkills,
  IconExternalLink,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Home':
      return <IconHome />;
    case 'About':
      return <IconAbout />;
    case 'Experience':
      return <IconExperience />;
    case 'Projects':
      return <IconProjects />;
    case 'Education':
      return <IconEducation />;
    case 'Contact':
      return <IconContact />;
    case 'Logo':
      return <IconLogo />;
    case 'Close':
      return <IconClose />;
    case 'Menu':
      return <IconHamburger />;
    case 'Skills':
      return <IconSkills />;
    case 'Testimonials':
      return <IconTestimonial />;
    case 'External':
      return <IconExternalLink />;
    default:
      return <IconHome />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
