import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import links from '../data/links';
import Icon from './Icons/icon';
import Side from './Side';

const SideWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-right: 1px solid var(--tertiary-light);
  margin: 0;
  padding: 0;
  list-style: none;
  height: 80vh;

  li {
    margin-right: 10px;
    padding: 10px;
    font-size: var(--fs-s);
    font-family: var(--font-mono-family);
    line-height: 17px

    &:hover {
      transform: translateX(-3px);
    }
    
    &:last-of-type {
      margin-bottom: 10px;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    .links-details {
      display: none;
      @media (min-width: 1080px){
        display: inline-block;
      }
    }
  
    .link-item{
      &:hover,
      &:focus {
        transform: translateX(-3px);
      }
    }
  }

`;

const Sidebar = () => {
  const content = (
    <>
      {links
  && links.map((link) => (
    <li key={link.id}>
      <Link
        to={link.url}
        aria-label={link.name}
        rel="noreferrer"
        className="link-item"
      >
        <Icon name={link.name} />
        {' '}
        <span className="links-details">
          {link.name}
        </span>
      </Link>
    </li>
  ))}
    </>
  );

  return (
    <Side orientation="left">
      <SideWrapper>
        {content}
      </SideWrapper>
    </Side>
  );
};

export default Sidebar;
