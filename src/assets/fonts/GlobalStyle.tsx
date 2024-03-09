import { createGlobalStyle } from 'styled-components';

import InterBold from './static/Inter-Bold.ttf';
import InterRegular from './static/Inter-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
