import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import mixins from '../styles/mixins';
import Icon from './Icons/icon';
import MenuToggle from './MenuToggle';
import useScrollDirection from '../hooks/useScrollDirection';

const Header = styled.header`
${mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 25px;
  padding: 0px 50px;
  width: 100%;
  height: var(--navbar-height);
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

  @media (prefers-reduced-motion: no-preference) {
    ${(props) => props.scrollDirection === 'up'
      && !props.scrolledToTop
      && css`
        height: var(--navbar-scroll-height);
        transform: translateY(0px);
        background-color: var(--primary);
        opacity: 0.8;
        box-shadow: 0 10px 30px -10px var(--primary-shadow);
      `};

    ${(props) => props.scrollDirection === 'down'
      && !props.scrolledToTop
      && css`
        height: var(--navbar-scroll-height);
        transform: translateY(calc(var(--navbar-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--primary-shadow);
      `};
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

  const isHome = window.location.pathname === '/';
  const [isMounted, setIsMounted] = useState(!isHome);
  const timeout = 2000;
  const fadeClass = isHome ? 'fade' : '';
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection('down');
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 30);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 700);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <NavWrapper>
        <TransitionGroup component={null}>
          {isMounted
          && (
          <CSSTransition classNames={fadeClass} timeout={timeout}>
            <>
              {logo}
            </>
          </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
          <CSSTransition classNames={fadeClass} timeout={timeout}>
            <MenuToggle />
          </CSSTransition>
          )}
        </TransitionGroup>
      </NavWrapper>

    </Header>
  );
};

export default Navbar;
