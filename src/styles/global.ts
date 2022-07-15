import { createGlobalStyle } from "styled-components";
import { defaultThemeColor } from "./themes/default";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     body {
        background: ${defaultThemeColor["background"]};
        color: ${defaultThemeColor["base-title"]};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input-security, textarea,button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;
