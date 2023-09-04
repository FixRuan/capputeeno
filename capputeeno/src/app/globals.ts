import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --border-radius: 12px;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
`;


