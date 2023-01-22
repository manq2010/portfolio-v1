import React, { useState, useEffect, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';
import sr from '../utils/sr';
import { srConfig } from '../utils/config';
import experienceData from '../data/experienceData';

const ExperienceSection = styled.section`
// max-width: 700px;

.inner {
  display: flex;
}
`;

const ExperinceList = styled.div`
position: relative;
z-index: 3;
width: max-content;
padding: 0;
margin: 0;
list-style: none;


`;

const StyledTabButton = styled.button`
display: flex;
align-items: center;
width: 100%;
height: 42px;
padding: 0 20px 2px;
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
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px ));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

`;

const Experience2 = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  //   const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <ExperienceSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="inner">
        <ExperinceList
        //   role="tablist"
          aria-label="Job tabs"
        >
          { experienceData
    && experienceData.map((companyName) => (
      // <ExperienceItem key={uuidv4()} experience={experience} />
      <StyledTabButton
        key={companyName.id}
        isActive={activeTabId === companyName.id}
        onClick={() => setActiveTabId(companyName.id)}
                // eslint-disable-next-line no-return-assign
        ref={(el) => (tabs.current[companyName.id] = el)}
        // id={`tab-${companyName.id}`}
        role="tab"
        tabIndex={activeTabId === companyName.id ? '0' : '-1'}
        aria-selected={activeTabId === companyName.id}
        aria-controls={`panel-${companyName.id}`}
      >
        {companyName.company}
      </StyledTabButton>
    ))}
          <StyledHighlight activeTabId={activeTabId} />
        </ExperinceList>

      </div>
    </ExperienceSection>
  );
};

export default Experience2;
