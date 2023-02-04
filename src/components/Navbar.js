import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixins from '../styles/mixins';
import Icon from './Icons/icon';
import MenuToggle from './MenuToggle';

const Header = styled.header`
${mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 25px;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--primary);
  opacity: 0.8;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1080px) {
    padding: 0px 50px;
  }
`;

const NavWrapper = styled.nav`
${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--tertiary-lightest);
  font-family: var(--font-mono-family);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${mixins.flexCenter};

    a {
      color: var(--secondary);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--secondary-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const Navbar = () => {
  const logo = (
    <div className="logo" tabIndex="-1">
      <Link to="/" aria-label="home">
        <Icon name="Logo" />
      </Link>
    </div>
  );
  return (
    <Header>
      <NavWrapper>
        <>
          {logo}
        </>
        <MenuToggle />
      </NavWrapper>

    </Header>
  );
};

export default Navbar;
