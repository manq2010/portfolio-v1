import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import about from '../data/aboutData';
import mixins from '../styles/mixins';
import { loaderDelay } from '../utils/delays';
import { srConfig } from '../utils/config';
import sr from '../utils/sr';

const AboutWrapper = styled.section`
// max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const AboutItems = styled.div`
    ul.skills-list {
        ${mixins.fancyList}
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;

        li {
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono-family);
            font-size: var(--fs-xs);
        
            &:before {
              font-size: var(--fs-s);
              line-height: 12px;
            }
          }
      
        div > p {
          text-align: justify;
        }
    }      
`;

const AboutPicture = styled.div`
    position: relative;
    margin: 50px auto 0;
    width: 70%;
    
    @media (min-width: 768px) {
        max-width: 400px;
    }

    .wrapper {
        ${mixins.boxShadow}
        display: block;
        position: relative;
        width: 100%;
        border-radius: var(--border-radius);
        background-color: var(--secondary);

        &:hover,
        &:focus {
          .img {
            filter: none;
            mix-blend-mode: normal;
          }

          .image-caption {
          top: 98%;
          transition: var(--transition-effect);
          color: var(--primary-lightest);
          background-color: var(--secondary);
          }
        }
        .img {
          position: relative;
          border-radius: var(--border-radius);
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
          transition: var(--transition-effect);
        }
    }
`;

const P = styled.p`
    text-align: justify;
    margin-top: 50px;
`;

const About = () => {
  const {
    description1, description2, description3, image, stack,
  } = about;

  const [isMounted, setIsMounted] = useState(false);

  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  useEffect(() => {
    // const timeout = setTimeout(() => setIsMounted(true));
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const one = <P>{description1}</P>;
  const two = <P>{description2}</P>;
  const three = <P>{description3}</P>;
  const four = <P>Here are a few technologies I&apos;ve been working with recently:</P>;
  const five = (
    <ul className="skills-list">
      {
        stack && stack.map(({ id, skill }) => <li key={id}>{skill}</li>)
}
    </ul>
  );

  const items = [one, two, three, four, five];
  return (
    <AboutWrapper id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        { isMounted
          && (
          <>
            <AboutItems>
              <TransitionGroup component={null}>
                {
              items.map((item, i) => (
                <CSSTransition key={uuidv4()} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms`, marginTop: '12px' }}>{item}</div>
                </CSSTransition>
              ))
                }
              </TransitionGroup>
            </AboutItems>
            <AboutPicture>
              <TransitionGroup component={null}>
                <CSSTransition classNames="fadeup" timeout={loaderDelay}>
                  <div
                    style={{ transitionDelay: '600ms' }}
                    className="wrapper"
                  >
                    <img
                      className="img"
                      src={image}
                      alt="img-about"
                    />
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </AboutPicture>
          </>
          )}
      </div>
    </AboutWrapper>
  );
};

export default About;
