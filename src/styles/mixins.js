import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition-effect);
    color: var(--secondary);
    &:hover,
    &:focus,
    &:active {
      color: var(--secondary);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--secondary) !important;
        transition: var(--transition-effect);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.1rem;
      background-color: var(--secondary);
      transition: var(--transition-effect);
      opacity: 0.8;
    }
`,

  smallButton: css`
    color: var(--secondary);
    background-color: transparent;
    border: 1px solid var(--secondary);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fs-xs);
    font-family: var(--font-mono-family);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      background-color: var(--secondary-tint);
      outline: none;
    }

    &:after {
      display: none !important;
    }
`,

  bigButton: css`
    color: var(--secondary);
    background-color: transparent;
    border: 1px solid var(--secondary);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fs-s);
    font-family: var(--font-mono-family);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      background-color: var(--secondary-tint);
      outline: none;
    }

    &:after {
      display: none !important;
    }
`,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--primary-shadow);
    transition: var(--transition-effect);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--primary-shadow);
    }
`,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fs-l);

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--secondary);
      }
    }
`,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
`,

};

export default mixins;
