import { createGlobalStyle } from 'styled-components';


import twreot from '../../assets/fonts/TwCenMTStd.eot';
import twrsvg from '../../assets/fonts/TwCenMTStd.svg';
import twrttf from '../../assets/fonts/TwCenMTStd.ttf';
import twrwoff from '../../assets/fonts/TwCenMTStd.woff';
import twrwoff2 from '../../assets/fonts/TwCenMTStd.woff2';


export const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Tw Cen MT Std';
        src: url('${twreot}');
        src: url('${twrwoff2}') format('woff2'),
            url('${twrwoff}') format('woff'),
            url('${twrttf}') format('truetype'),
            url('${twrsvg}#PPPangramSans-Semibold') format('svg');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    :root {
    --regular: 'Tw Cen MT Std', sans-serif;
    --black: #000000;
    --white: #FFFCF1;
    --red: #E3242D;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }

    body {
        background-color: var(--white);
        color: var(--red);
        font-size: 16px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }

    ::-webkit-scrollbar {
        display: none;
    }

`

