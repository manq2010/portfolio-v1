import React from 'react';
import styled from 'styled-components';
import contactsData from '../data/contactsData';
import mixins from '../styles/mixins';

const FooterWrapper = styled.footer`
${mixins.flexCenter}
flex-direction: column;
height: auto;
min-height: 70px;
padding: 15px;
text-align: center;
`;

const CreditWrapper = styled.div`
color: var(--tertiary-light);
font-family: var(--font-mono-family);
font-size: var(--fs-xxs);
line-height: 1;

a {
  padding: 10px;
}
`;

const Footer = () => (
  <FooterWrapper id="footer">
    <CreditWrapper>
      <a href={contactsData.repo} aria-label="Link to GitHub repo" target="_blank" rel="noreferrer">
        <div>
          Created by Mancoba Sihlongonyane
        </div>
        <div>
          &copy;
          {' '}
          {new Date().getFullYear()}
        </div>
      </a>
    </CreditWrapper>
  </FooterWrapper>
);

export default Footer;
