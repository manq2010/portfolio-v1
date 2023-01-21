import { css } from 'styled-components';

const calibreNormalWeights = {
  400: 'https://fonts.googleapis.com/css2?family=Calibre:wght@400&display=swap',
  500: 'https://fonts.googleapis.com/css2?family=Calibre:wght@500&display=swap',
  600: 'https://fonts.googleapis.com/css2?family=Calibre:wght@600&display=swap',
};

const calibreItalicWeights = {
  400: 'https://fonts.googleapis.com/css2?family=Calibre:ital,wght@400&display=swap',
  500: 'https://fonts.googleapis.com/css2?family=Calibre:ital,wght@500&display=swap',
  600: 'https://fonts.googleapis.com/css2?family=Calibre:ital,wght@600&display=swap',
};

const sfMonoNormalWeights = {
  400: 'https://fonts.googleapis.com/css2?family=SFMono:wght@400&display=swap',
  600: 'https://fonts.googleapis.com/css2?family=SFMono:wght@600&display=swap',
};

const sfMonoItalicWeights = {
  400: 'https://fonts.googleapis.com/css2?family=SFMono:ital,wght@400&display=swap',
  600: 'https://fonts.googleapis.com/css2?family=SFMono:ital,wght@600&display=swap',
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  Object.entries(family[style]).forEach(([weight, formats]) => {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
        ../font-face {
          font-family: '${family.name}';
          src: url(${woff2}) format('woff2'),
              url(${woff}) format('woff');
          font-weight: ${weight};
          font-style: ${style};
          font-display: auto;
        }
      `;
  });

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const Fonts = css`
    ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
  `;

export default Fonts;
