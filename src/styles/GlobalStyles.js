import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import mixins from './mixins';
import fontFaces from './fonts';

const GlobalStyle = createGlobalStyle`
${variables}
${TransitionStyles}
${fontFaces}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  width: 100%;

  /* handle scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--tertiary-dark) var(--primary);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::selection {
  background-color: var(--primary-lightest);
  color: var(--tertiary-lightest);
}

/* handle default focus */
:focus {
  outline: 2px solid var(--secondary);
  outline-offset: 3px;
}

:focus:not {
  outline: none;
  outline-offset: 0px;
}

/* handle scrollbar */
::-webkit-scrollbar {
  width: 1rem;
}
::-webkit-scrollbar-track {
  background: var(--primary);
}
::-webkit-scrollbar-thumb {
  background-color: var(--tertiary-dark);
  border: 2px solid var(--primary);
  border-radius: 12px;
}

body {
  color: var(--tertiary);
  background-color: var(--primary);
  -webkit-font-smoothing: antialiased;
  width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  margin: 0;
  font-size: var(--fs-l);
  line-height: 1.2;
  font-family: var(--font-main-family);
  
  @media (min-width: 768){
    font-size:  var(--fs-xl);
  }

  &.blur {
    overflow: hidden;
    #content-blur > * {
      filter: blur(6px) brightness(0.6);
      transition: var(--transition-effect);
      pointer-events: none;
      user-select: none;
    }
  }
}

main {
  margin: 0 auto;
  width: 100%;
  min-height: 80vh;
  padding: 0 12.5px;

  @media (min-width: 480px){
    padding: 0 25px;
  }

  @media (min-width: 768px){
    padding: 0 50px;
    min-height: 90vh;
  }

  @media (min-width: 1080px){
    padding: 0 100px;
  }

  @media (min-width: 1200px){
    padding: 0 150px;
  }
}

section {
  padding: 4rem 0;
  
  @media (min-width: 480px) {
    padding: 60px 0;
  }
  
  @media (min-width: 768px) {
    padding: 80px 0;
  }

  @media (min-width: 1200px){
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px 0;
  font-weight: 600;
  color: var(--tertiary-lightest);
  line-height: 1.1;
}

.big-heading {
  font-size: clamp(40px, 8vw, 80px);
}

.medium-heading {
  font-size: clamp(40px, 8vw, 60px);
}

.small-heading {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fs-heading));
  white-space: nowrap;
}

img,
svg {
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
}

svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  vertical-align: middle;

  &.feather {
    fill: none;
  }
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: var(--transition-effect);

  &:hover,
  &:focus {
    color: var(--secondary);
  }

  &.inline-link {
    ${mixins.inlineLink}
  }
}

button {
  cursor: pointer;
  border: 0;
  border-radius: 0;
}

input {
  border-radius: 0;
  outline: 0;

  &:focus {
    outline: 0;
  }
  &:focus,
  &:active {
    &::placeholder {
      opacity: 0.5;
    }
  }
}

p {
  margin: 0 0 15px 0;
  text-align: justify;

  &:last-child,
  &:last-of-type {
    margin: 0;
  }

  & > a {
    ${mixins.inlineLink}
  }
}

ul {
  
}

hr {
  background-color: var(--primary-lightest);
  height: 1px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
}

#logo {
  color: var(--secondary);
}

`;

export default GlobalStyle;
