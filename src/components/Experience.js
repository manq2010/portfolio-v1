import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import experienceData from '../data/experienceData';
import mixins from '../styles/mixins';

const ExperienceWrapper = styled.section`
.inner {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: 768px) {
  flex-direction: row;
  }
}
`;

const TabListContainer = styled.div`
position: relative;
z-index: 3;
width: max-content;
padding: 0;
margin: 0;
`;

const TabButton = styled.button`
display: flex;
align-items: center;
width: 100%;
height: 42px;
// padding: 0 20px 10px 10px;
border-left: 2px solid var(--primary-lightest);
background-color: transparent;
color: ${({ isActive }) => (isActive ? 'var(--secondary)' : 'var(--tertiary)')};
font-family: var(--font-mono-family);
font-size: var(--fs-xs);
text-align: left;
white-space: nowrap;


&:hover,
&:focus {
  background-color: var(--primary-lightest);
}

`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: var(--secondary);
  transform: translateY(calc(${({ activeTab }) => activeTab} * 42px ));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

`;

const JobDetails = styled.div`
margin-left: 20px;
width: 100%;
height: auto;
padding: 10px 5px;

ul {
  ${mixins.fancyList};
}

h3 {
  margin-bottom: 2px;
  font-size: var(--fs-xxl);
  font-weight: 500;
  line-height: 1.3;

  .company {
    color: var(--secondary);
  }
}

.range {
  margin-bottom: 25px;
  color: var(--tertiary-light);
  font-family: var(--font-mono-family);
  font-size: var(--fs-xs);
}
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ExperienceWrapper id="jobs">
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="inner">
        <TabListContainer>
          {experienceData.map((experience) => (
            <TabButton
              key={experience.id}
              isActive={experience.id === activeTab}
              onClick={() => setActiveTab(experience.id)}
            >
              {experience.company}
            </TabButton>
          ))}
          <StyledHighlight activeTab={activeTab} />
        </TabListContainer>
        <CSSTransition in={activeTab !== 0} timeout={250} classNames="fade">
          <JobDetails>
            <h3>
              <span>{experienceData[activeTab].jobTitle}</span>
              <span className="company">
                  &nbsp;@&nbsp;
                <a href={experienceData[activeTab].url} className="inline-link" target="_blank" rel="noreferrer">
                  {experienceData[activeTab].company}
                </a>
              </span>
            </h3>
            <p className="range">{experienceData[activeTab].range}</p>

            <ul>
              {
                    experienceData[activeTab].points
                    && (
                      experienceData[activeTab].points
                        .map((point) => (
                          <li key={uuidv4()}>{point}</li>
                        ))
                    )
              }
            </ul>
          </JobDetails>
        </CSSTransition>
      </div>
    </ExperienceWrapper>
  );
};

export default Experience;
