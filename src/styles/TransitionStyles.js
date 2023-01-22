import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.02;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing-animation), transform 300ms var(--easing-animation);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing-animation), transform 300ms var(--easing-animation);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.02;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing-animation), transform 300ms var(--easing-animation);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing-animation), transform 300ms var(--easing-animation);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing-animation);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing-animation);
  }


  /* Fade-links */
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

export default TransitionStyles;
