import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
${variables}
  body {
    font-family: "Overpass", sans-serif;
    color: #072E4A;
    background: #D0EBFF;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
