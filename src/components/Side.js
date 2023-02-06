import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarWrapper = styled.div`

  position: fixed;
  display: none;
  color: var(--tertiary-light);
  left: ${(props) => (props.orientation === 'left' ? '0' : 'auto')};

  @media (min-width: 768px) {
      display: flex;
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
