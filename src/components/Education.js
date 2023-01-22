import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '../utils/sr';
import { srConfig } from '../utils/config';
import educationData from '../data/educationData';
import { loaderDelay } from '../utils/delays';
import mixins from '../styles/mixins';

const EducationWrapper = styled.section`
${mixins.flexBetween};
display: block;

`;

const EducationPanel = styled.div`
width: 100%;
height: auto;
padding: 10px 5px;

.education-item {
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: 200px 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 200px auto 200px;
    }
}

ul {
  ${mixins.fancyList};
}

h3 {
  margin-bottom: 2px;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;

  .company {
    color: var(--secondary);
  }
}

.range {
  margin-bottom: 25px;
  color: var(--secondary);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
}

.education-item-wrapper {
    margin-top: 20px;
}

.credential-button-open {
    ${mixins.smallButton}
}

.credential-button-close {
    ${mixins.smallButton}
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

.link {
    ${mixins.smallButton}
    margin: 0 10px 10px 0;
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

const Education = () => {
  const revealContainer = useRef(null);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <EducationWrapper id="education" ref={revealContainer}>
      <TransitionGroup component={null}>
        <CSSTransition classNames="fadeup" timeout={loaderDelay}>
          <h2 className="numbered-heading">Where I acquired knowledge</h2>
        </CSSTransition>
        <CSSTransition classNames="fadeup" timeout={loaderDelay + 100}>
          <EducationPanel>
            {
        educationData && (
          <div className="education-data">
            <div>
              {educationData.map((education) => (
                <div key={education.id} className="education-item-wrapper">
                  <div className="education-item">
                    <h4>
                      <span className="company">
                        @&nbsp;
                        <a href={education.url} className="inline-link">
                          {education.institution}
                        </a>
                      </span>
                    </h4>
                    <div>{education.course}</div>
                    <div className="range">
                      {education.startYear}
                      {' '}
                      -
                      {' '}
                      { education.endYear ? (
                        <>
                          {education.endYear}
                        </>
                      ) : ('Current')}
                    </div>
                  </div>
                  <div className="credentials">
                    { education.accreditation ? (
                      <>
                        {showButton && (
                        <button
                          type="button"
                          onClick={() => setShowMessage(true)}
                          className="credential-button-open"
                        >
                          Show
                          {' '}
                          {education.institution}
                          {' '}
                          accreditations
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

                            <ul className="accreditation-list">
                              {
                              education.accreditation.map((
                                { id, credentialName, credentialUrl },
                              ) => (
                                <a
                                  key={id}
                                  className="link"
                                  href={credentialUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {credentialName}
                                </a>
                              ))
                            }
                            </ul>

                            <button
                              type="button"
                              onClick={() => setShowMessage(false)}
                              className="credential-button-close"
                            >
                              Hide
                              {' '}
                              {education.institution}
                              {' '}
                              accreditations
                            </button>
                          </div>
                        </CSSTransition>
                      </>
                    ) : ('')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
          </EducationPanel>
        </CSSTransition>
      </TransitionGroup>
    </EducationWrapper>
  );
};
export default Education;
