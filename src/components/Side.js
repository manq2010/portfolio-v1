import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
//   width: 40px;
  position: fixed;
  bottom: 0;
  display: none;
  left: ${(props) => (props.orientation === 'left' ? '0' : 'auto')};
  color: var(--tertiary-light);

  @media (min-width: 768px) {
      display: inline-block;
      left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
    }

  @media (min-width: 1080px) {
        left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
    }
`;

const Side = ({ children, orientation }) => (
  <SideBarWrapper orientation={orientation}>
    {children}
  </SideBarWrapper>
);

Side.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default Side;
