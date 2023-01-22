import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
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
                <>
                  <div key={education.id} className="education-item">
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
                  <div>
                    { education.accreditation ? (
                      <>
                        {showButton && (
                        <button
                          type="button"
                          onClick={() => setShowMessage(true)}
                          className="hero-button-open"
                        >
                          Show accreditations
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
                              href="test"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Test
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
                      </>
                    ) : ('')}
                  </div>
                </>
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
