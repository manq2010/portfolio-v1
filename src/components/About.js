import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import about from '../../data/aboutData';
import { srConfig } from '../../utils/config';
import sr from '../../utils/sr';

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
  ${({ theme }) => theme.mixins.fancyList};
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  grid-gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  // overflow: hidden;
  list-style: none;

  li {
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
  
      &:before {
        font-size: var(--fz-sm);
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
  max-width: 400px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
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
      transition: var(--transition);
      color: var(--primary-lightest);
      background-color: var(--secondary);
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
  }
`;

const P = styled.p`
text-align: justify;
`;

const About = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);
  const {
    description1, description2, description3, image, stack,
  } = about;
  return (
    <AboutWrapper id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <AboutItems>
          <div>
            <P>{description1}</P>

            <P>{description2}</P>

            <P>{description3}</P>

            <P>Here are a few technologies I&apos;ve been working with recently:</P>
          </div>
          <ul className="skills-list">
            {
            stack && stack.map(({ id, skill }) => <li key={id}>{skill}</li>)
            }
          </ul>
        </AboutItems>
        <AboutPicture>
          <div className="wrapper">
            <img
              className="img"
              src={image}
              alt="img-about"
            />
          </div>
        </AboutPicture>
      </div>
    </AboutWrapper>
  );
};

export default About;
