import React from 'react';
import styled from 'styled-components';
// import socialsData from '../data/socialsData';
// import Icon from './Icons/icon';
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

// const SocialListWrapper = styled.div`
// display: none;

// @media (max-width: 768px) {
//   display: block;
//   width: 100%;
//   max-width: 270px;
//   margin: 0 auto 10px;
//   color: var(--tertiary-light);
// }

// ul {
//   ${mixins.flexBetween}
//   padding: 0;
//   margin: 0;
//   list-style: none;

//   a {
//     padding: 10px;
//     svg {
//       width: 20px;
//       height: 20px;
//     }
//   }
// }
// `;

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
    {/* <SocialListWrapper>
      <ul>
        {socialsData
        && socialsData.map(({ url, name, id }) => (
          <li key={id}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </SocialListWrapper> */}

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
