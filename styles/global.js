import { createGlobalStyle } from "styled-components";
import "../node_modules/hamburgers/dist/hamburgers.css";
import "../node_modules/antd/es/notification/style/css";
import "../node_modules/antd/es/carousel/style/css";

const GlobalStyle = createGlobalStyle`
  html,
  body, #__next {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
