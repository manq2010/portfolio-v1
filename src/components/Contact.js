import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
import { srConfig } from '../utils/config';
import sr from '../utils/sr';
import contactsData from '../data/contactsData';
import mixins from '../styles/mixins';

const ContactWrapper = styled.section`
${mixins.flexCenter}
flex-direction: column;
margin: 0 auto 50px;


@media (min-width: 768px) {
  margin: 0 auto 100px;
}

.overline {
  display: block;
  margin-bottom: 20px;
  color: var(--secondary);
  font-family: var(--font-mono-family);
  font-size: var(--fs-m);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fs-s);
  }

  &:after {
    display: none;
  }
}

.title {
  font-size: clamp(40px, 5vw, 60px);
}

.buttons {
  margin-top: 50px;
}

.contact-button-open {
  ${mixins.bigButton}
}

.contact-button-close {
  ${mixins.smallButton}
        border: none;
        &:hover,
        &:focus,
        &:active {
        background-color: inherit;
        border: none;
      }

      &:focus,
      &:hover {
        color: var(--tertiary);
        transform: translateY(-3px);
      }
}

.link {
  ${mixins.bigButton}
  margin-left: 10px;

}
`;

const Contact = () => {
  const revealContainer = useRef(100);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <ContactWrapper id="contacts" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>

      <div
        className="buttons"
      >

        {showButton && (
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="contact-button-open"
        >
          Hit me up on ...
        </button>
        )}

        <CSSTransition
          in={showMessage}
          nodeRef={nodeRef}
          timeout={300}
          unmountOnExit
          classNames="links"
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <div
            ref={nodeRef}
          >
            <a
              className="link"
              href={`mailto:${contactsData.email}`}
              onClick={() => setShowMessage(false)}
            >
              eMail
            </a>
            <a
              className="link"
              href={contactsData.linkedIn}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => setShowMessage(false)}
              className="contact-button-close"
            >
              <CloseIcon />
            </button>
          </div>
        </CSSTransition>
      </div>

    </ContactWrapper>
  );
};

export default Contact;
