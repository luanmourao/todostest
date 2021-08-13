import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-bg: #0F0F0F;
    --card-bg: #242424;
    --blue: #3D6CB9;
    --green: #17B978;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--body-bg);
    color: #ffffff;
    -webkit-font-smoothing: antialiesed;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

`;