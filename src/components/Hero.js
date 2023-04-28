import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import headerData from '../data/headerData';
import mixins from '../styles/mixins';

const HeroWrapper = styled.section`
    ${mixins.flexCenter}
    flex-direction: column;
    align-items: start;

    @keyframes spark {
      0% {
        opacity: 0.6;
        transform: scale(0.97);
        }
      50% {
        opacity: 1;
        transform: scale(1.03);
        }
      100% {
        opacity: 0.6;
        transform: scale(0.97);
      }
    }

    .spark {
      display: inline-block;
      position: relative;
      animation: spark 3s ease-in-out infinite;
      animation-delay: calc(var(--animation-delay) * 1s);
    }

    h1 {
      position: relative;
      display: inline-block;
      font-weight: 400;
      line-height: 2;
      margin: 0 0 20px 2px;
      color: var(--secondary);
      font-family: var(--font-mono);
      text-shadow: 0 0 10px var(--secondary), 0 0 20px var(--secondary), 0 0 30px var(--secondary), 0 0 40px var(--secondary), 0 0 50px var(--secondary);
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: clamp(var(--fs-s), 5vw, var(--fs-m));
      font-weight: 400;
      line-height: 2;
      margin: 0 0 20px 2px;
      
      @media (min-width: 480px){
        margin: 0 0 30px 4px;
      }
    }

    h3 {
      margin-top: 5px;
      color: var(--tertiary);
      line-height: 1.2;
    }

    h1 .spark,
    h3 .spark {
      --animation-delay: 0;
    }

    h1 .spark:nth-of-type(2),
    h3 .spark:nth-of-type(2) {
      --animation-delay: 0.2;
    }

    h1 .spark:nth-of-type(3),
    h3 .spark:nth-of-type(3) {
      --animation-delay: 0.4;
    }

    h1 .spark:nth-of-type(4),
    h3 .spark:nth-of-type(4) {
      --animation-delay: 0.6;
    }

    h1 .spark:nth-of-type(5),
    h3 .spark:nth-of-type(5) {
      --animation-delay: 0.8;
    }


    p {
        max-width: 520px;
    }

    .link {
        ${mixins.smallButton}
        margin-right: 10px;
      }

    .cv-link {
      ${mixins.smallButton}
      margin-right: 10px;
      color: var(--primary);
      background-color:  var(--secondary);
      border: 1px solid var(--primary);
      &:hover,
      &:focus,
      &:active {
        background-color: var(--primary-lightest);
        border: 1px solid var(--tertiary);
        color: var(--tertiary)
      }
    }

    .hero-button-open {
        ${mixins.bigButton}
    }

    .hero-button-close {
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

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 30px;
      }
`;

const Hero = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  const {
    title, description1, description2, name,
    linkedIn, resumePdf, email, github,
  } = headerData;

  // const one = <h1>Hi, my name is</h1>;
  const one = <h1 className="spark">Hi, my name is</h1>;
  const two = <h2 className="biggest-heading">{name}</h2>;
  const three = <h3 className="big-heading spark">{title}</h3>;
  // const three = <h3 className="big-heading">{title}</h3>;
  const four = (
    <p>
      {description1}
      {' '}
      <Link
        to="/projects"
        aria-label="projects"
        rel="noreferrer"
      >
        work
      </Link>
      {'. '}
      {description2}
    </p>
  );

  const items = [one, two, three, four];
  return (
    <HeroWrapper>
      {items.map((item) => (
        <div key={uuidv4()}>{ item }</div>
      ))}

      <div
        className="buttons"
      >

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
          timeout={600}
          unmountOnExit
          classNames="links"
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
          // classNames="fadeup"
        >
          <div
            ref={nodeRef}
          >
            <a
              className="link"
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              GitHub
            </a>
            <a
              className="link"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              LinkedIn
            </a>
            <a
              className="link"
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              Email
            </a>
            <a
              className="cv-link"
              href={resumePdf}
              download="resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMessage(false)}
            >
              Download CV
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
