import { css } from 'styled-components';

const variables = css`
:root {
// handle primary colors
--primary: #2d2727;
--primary-light: #6c6868;
--primary-lightest: #aba9a9;
--primary-shadow: #121010;

// handle secondary color - darker
--secondary: #f0eb8d;
--secondary-tint: #48462a;


// handle tertiary colors
--tertiary: #8f43ee;
--tertiary-light: #bc8ef5;
--tertiary-lightest: #ddc7fa;

// handle other colors
--white: #f4ecfd;

// handle font family
--font-main-family:  'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
sans-serif;
--font-mono-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

// handle font-sizes
--fs-heading: 33px;
--fs-xxl: 22px;
--fs-xl: 20px;
--fs-l: 18px;
--fs-m: 16px;
--fs-s: 14px;
--fs-xs: 13px;
--fs-xxs: 12px;

// handle border radius
--border-radius: 5px;

// handle navbar
--navbar-height: 80px;
--navbar-scroll-height: 60px;

// handle cubic-bezier curves
// https://easings.net/
// https://cubic-bezier.com/#.7,.07,.45,.99
--easing-animation: cubic-bezier(.7,.07,.45,.99);
--easing-transition: cubic-bezier(0.83, 0, 0.17, 1);
--easing-hamburger: cubic-bezier(0.64, 0.061, 0.587, 0.21);
--easing-hamburger-active: cubic-bezier(0.315, 0.71, 0.457, 1) 0.14s;


// handle transition effect
--transition-effect: all 0.3s var(--easing-transition);

// handle hamburger
--hamburger-width: 30px;
--hamburger-before: top 0.12s ease-in 0.26s, opacity 0.12s ease-in;
--hamburger-before-active: top 0.12s ease-out, opacity 0.12s ease-out 0.14s;
--hamburger-after: bottom 0.12s ease-in 0.26s, transform 0.24s var(--easing-hamburger);
--hamburger-after-active: bottom 0.12s ease-out, transform 0.24s var(--easing-hamburger-active);
}
`;

export default variables;
