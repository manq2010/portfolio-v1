import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import mixins from '../styles/mixins';
import Icon from './Icons/icon';
import links from '../data/links';
// import Icon from './Icons/icon';

const NenuWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
${mixins.flexCenter};
    position: relative;
    z-index: 10;
    // margin-right: -15px;
    // padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;


    @media (min-width: 768px) {
        display: none;
    }

    .menu {
        // display: inline-block;
        // position: relative;
        width: var(--hamburger-width);
        height: 24px;


        transition-duration: 0.2s;
        transition-property: transform;
        transition-delay: ${(props) => (props.menuOpen ? '0.12s' : '0s')};
        transform: rotate(${(props) => (props.menuOpen ? '360deg' : '0deg')});
        transition-timing-function: cubic-bezier(
            ${(props) => (props.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19')}
          );
      }

`;

const MenuSidebar = styled.aside`
${mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--primary-light);
    box-shadow: -10px 0px 30px -15px var(--primary-shadow);
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);

    @media (min-width: 768px) {
          display: none;
    }

    nav {
        ${mixins.flexBetween};
        width: 100%;
        flex-direction: column;
        color: var(--tertiary-lightest);
        font-family: var(--font-mono-family);
        text-align: center;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
    
        li {
          position: relative;
          margin: 0 auto 20px;
          font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
    
          @media (max-width: 600px) {
            margin: 0 auto 10px;
          }
    
          // &:before {
          //   content: "0" counter(item) ".";
          //   display: block;
          //   margin-bottom: 5px;
          //   color: var(--secondary);
          //   font-size: var(--fz-sm);
          // }

          svg {
            width: 20px;
            height: 20px;
          }
        }
    
        a {
          ${mixins.link};
          width: 100%;
          // padding: 3px 20px 20px;
        }
    }
`;

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.removeEventListener('resize', onResize);
  }, []);

  const content = (
    <>
      {links
        && links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              aria-label={link.name}
              rel="noreferrer"
            >
              <Icon name={link.name} />
              {' '}
              {link.name}
            </Link>
          </li>
        ))}
    </>
  );

  //   const wrapperRef = useRef();
  //   useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <NenuWrapper className="menu">
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div>
        <HamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
        >
          <div className="menu">
            { menuOpen ? (
              <Icon
                name="Close"
                aria-label="Close"
              />
            ) : (
              <Icon
                name="Menu"
                aria-label="Menu"
              />
            )}
          </div>
        </HamburgerButton>

        <MenuSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            <ul>
              {content}
            </ul>
          </nav>
        </MenuSidebar>
      </div>

    </NenuWrapper>
  );
};

export default MenuToggle;
