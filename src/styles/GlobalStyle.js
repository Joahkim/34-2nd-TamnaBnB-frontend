import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box; 
  }

  html {
    font-family: 'Noto Sans KR', sans-serif; 
  }
  
  a, button {
     cursor: pointer;
  }

`;

export default GlobalStyle;
