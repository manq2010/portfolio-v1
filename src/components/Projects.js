import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import Icon from './Icons/icon';
import projects from '../data/projectsData';

const ProjectWrapper = styled.section`

`;

const ProjectsGrid = styled.ul`
${mixins.resetList};

.btn {
  ${mixins.bigButton};
  margin-top: 4rem;
}

&:nth-child(odd) {
  display: grid;
  grid-template-columns: repeat(2, 1fr) reverse;
}

`;

const ProjectItem = styled.li`
${mixins.boxShadow};

position: relative;
display: grid;
display: grid-template-columns;
grid-gap: 20px;
align-items: center;



@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

&:not(:last-of-type) {
  margin-bottom: 30px;
  
  @media (min-width: 480px) {
    margin-bottom: 70px;
  }

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  
}

&:nth-of-type(odd) {

  @media (min-width: 768px) {
    direction: rtl;
  }

  .project-tech-list {
    justify-content: flex-start;
    
    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    li {
      margin: 0 10px 5px 0;
      
      @media (min-width: 768px) {
        margin: 0 0 5px 20px;
      }
    }
  }

  .project-links {
    justify-content: flex-start;
    margin-left: -10px;
    margin-right: 0;
    
    @media (min-width: 768px) {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
  }
}


.project-content {
  position: relative;
  @media (min-width: 480px) {
    padding: 30px 25px 20px;
  }

  @media (min-width: 768px) {
    height: 100%;
    padding: 40px 40px 30px;
  }
}

.project-title {
  font-size: clamp(24px, 5vw, 28px);
  color: var(--white);

  
  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
}

.project-description {
  ${mixins.boxShadow};
  position: relative;
  padding: 20px 0;
  border-radius: var(--border-radius);
  background-color: transparent;
  color: var(--tertiary-light);
  font-size: var(--fz-lg);
  
  @media (min-width: 768px) {
    padding: 25px;
    background-color: var(--primary-light);
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  a {
    ${mixins.inlineLink};
  }
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 10px 0;
  padding: 0;
  list-style: none;
  
  li {
    margin: 0 10px 5px 0;
    color: var(--tertiary-lightest);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }
  
  @media (min-width: 768px) {
    margin: 25px 0 10px;
    
    li {
      margin: 0 20px 5px 0;
      color: var(--tertiary-light);
    }
  }

}

.project-links {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--tertiary-lightest);

  a {
    ${mixins.flexCenter};
    padding: 10px;

    &.external {
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .cta {
    ${mixins.smallButton};
    margin: 10px;
  }
}

.project-image {
  ${mixins.boxShadow};
  position: relative;
  width: 100%;
  height: auto;
  object-fit: cover;

  a {
    width: 100%;
    height: 100%;
    background-color: var(--secondary);
    border-radius: var(--border-radius);
    vertical-align: middle;
  }

  .img {
    border-radius: var(--border-radius);
    height: 100%;
    width: auto;
    object-fit: cover;
  }
}
`;

const Projects = () => (
  <ProjectWrapper id="projects">
    <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>

    <ProjectsGrid>
      {
        projects
          && projects.slice().reverse().map((project) => (
            <ProjectItem
              key={project.id}
            >
              <div className="project-content">
                <h3 className="project-title">
                  <a href={project.sourceCode}>{project.name}</a>
                </h3>

                <div
                  className="project-description"
                >
                  <p>
                    {project.description}
                  </p>
                </div>

                {project.stack && (
                  <ul className="project-tech-list">
                    {project.stack.map((tech) => (
                      <li key={uuidv4()}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="project-links">
                  {project.sourceCode && (
                    <a href={project.sourceCode} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                      <Icon name="GitHub" />
                    </a>
                  )}
                  {project.livePreview && (
                    <a href={project.livePreview} aria-label="Live PreviewLink" className="external" target="_blank" rel="noreferrer">
                      <Icon name="External" />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-image">
                <a href={project.livePreview || (project.sourceCode || '#')}>
                  <img src={project.image} alt={project.name} className="img" />
                </a>
              </div>
            </ProjectItem>

          ))
}
    </ProjectsGrid>
  </ProjectWrapper>
);
export default Projects;
