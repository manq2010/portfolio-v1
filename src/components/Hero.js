import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import headerData from '../data/headerData';
import mixins from '../styles/mixins';

const HeroWrapper = styled.div`
    ${mixins.flexCenter}
    flex-direction: column;
    align-items: start;
    padding-top: var(--navbar-height);
    height: auto;

    @media (min-width: 1200px){
    }

    h1 {

    }

    p {
        max-width: 500px;
    }

    .linkedin-link {
        ${mixins.bigButton}
      }

    .hero-button-open {
        ${mixins.bigButton}
    }

    .hero-button-close {
        ${mixins.smallButton}
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 30px;
      }

      .links-enter {
        opacity: 0;
        transform: scale(0.9);
      }
      .links-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
      }
      .links-exit {
        opacity: 1;
      }
      .links-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
      }
      
`;

const Hero = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  const {
    title, description, name, linkedIn,
  } = headerData;

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">{name}</h2>;
  const three = <h3 className="big-heading">{title}</h3>;
  const four = (
    <p>
      {description}
    </p>
  );

  const items = [one, two, three, four];
  return (
    <HeroWrapper>
      {
    items.map((item) => (
      <div key={uuidv4()}>{item}</div>
    ))
}

      <div className="buttons">
        {showButton && (
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="hero-button-open"
        >
          Connect with me
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
              className="linkedin-link"
              href={linkedIn}
              download="resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
              onBlur={() => setShowMessage(false)}
            >
              LinkedIn
            </a>
            <a
              className="linkedin-link"
              href={linkedIn}
              download="resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              Email
            </a>

            <button
              type="button"
              onClick={() => setShowMessage(false)}
              className="hero-button-close"
            >
              <CloseIcon />
            </button>

          </div>
        </CSSTransition>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
