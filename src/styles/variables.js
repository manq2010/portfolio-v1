import { css } from 'styled-components';

const variables = css`
:root {
// handle primary colors
--primary: #2B3A55;
--primary-light: #404e66;
--primary-lightest: #808999;
--primary-shadow: #1a2333;

// handle secondary colors
--secondary: #effae9;
--secondary-tint: #c6eeb3;

// handle tertiary colors
--tertiary: #F3ECB0;
--tertiary-light: #f5f0c0;
--tertiary-lightest: 

// handle other colors
--white: #fdfdfd;

// handle font family
--font-main-family: 'Calibre', 'Inter',system-ui,
--font-mono-family: 'SF Mono','Roboto Mono', monospace;

// handle font-sizes
--fs-heading: 3.5rem;
--fs-xxl: 2.5rem;
--fs-xl: 2.2rem;
--fs-l: 2rem;
--fs-m: 1.8rem;
--fs-s: 1.6rem;
--fs-xs: 1.4rem;
--fs-xxs: 1.2rem;

// handle border radius
--border-radius: 0.5rem;

// handle navbar
--navbar-height: 10rem;

// handle cubic-bezier curves
// https://easings.net/
// https://cubic-bezier.com/#.7,.07,.45,.99
--easing-animation: cubic-bezier(.7,.07,.45,.99);
--easing-transition: cubic-bezier(0.83, 0, 0.17, 1);
--easing-hamburger: cubic-bezier(0.64, 0.061, 0.587, 0.21);
--easing-hamburger-active: cubic-bezier(0.315, 0.71, 0.457, 1) 0.14s;


// handle transition effect
--transition-effect: 
--transition: all 0.3s var(--easing-transition);

// handle hamburger
--hamburger-width: 3rem;
--hamburger-before: top 0.12s ease-in 0.26s, opacity 0.12s ease-in;
--hamburger-before-active: top 0.12s ease-out, opacity 0.12s ease-out 0.14s;
--hamburger-after: bottom 0.12s ease-in 0.26s, transform 0.24s var(--easing-hamburger);
--hamburger-after-active: bottom 0.12s ease-out, transform 0.24s var(--easing-hamburger-active);

}
`;

export default variables;
