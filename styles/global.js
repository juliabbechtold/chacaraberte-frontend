import { createGlobalStyle } from "styled-components";
import "../node_modules/hamburgers/dist/hamburgers.css";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  html,
  body, #__next {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    height: 100%;
    background-color: #FAF3EA;
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

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 100px;
    line-height: 133px;
    font-weight: bold;

    @media (max-width: 1440px) {
      font-size: 80px;
      line-height: 113px;
    }

    @media (max-width: 750px) {
      font-size: 60px;
      line-height: 80px;
    }

    
    @media (max-width: 360px) {
      font-size: 50px;
      line-height: 70px;
    }
  }

  h3 {
    font-size: 25px;
    line-height: 33px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
    margin: 0;

    @media (max-width: 1440px) {
      font-size: 22px;
      line-height: 30px;
    }

    @media (max-width: 750px) {
      font-size: 18px;
      line-height: 26px;
    }
  }

  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    color: #A89478;
    margin: 0;

    @media (max-width: 1440px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .leia-mais {
    display: flex;
    font-size: 20px;
    line-height: 27px;
    color: #5C4534;
    font-family: 'Brandon Grotesque';
    position: relative;
    width: fit-content;

    ::after {
      content: '';
      position: absolute;
      width: 80%;
      height: 1.5px;
      background-color: #5C4534;
      left: 0;
      bottom: 0;
      transition: all ease 0.5s;
    }

    :hover {
      color: #5C4534;

      ::after {
        width: 130%;
      }
    }
  }

  .arrow {
    position: absolute;

    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #fff;
    z-index: 2;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease 0.5s;

    @media (max-width: 1440px) {
      width: 80px;
      height: 80px;
    }

    :hover {
      transform: scale(0.8);
    }

    svg {
      height: 80px;
      width: auto;
      fill: #86e8e4;

      @media (max-width: 1440px) {
        height: 60px;
      }
    }
  }


  @font-face {
    font-family: 'Brandon Grotesque';
    src: url('/assets/fonts/BrandonGrotesque-Bold.eot');
    src: url('/assets/fonts/BrandonGrotesque-Bold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/BrandonGrotesque-Bold.woff2') format('woff2'),
        url('/assets/fonts/BrandonGrotesque-Bold.woff') format('woff'),
        url('/assets/fonts/BrandonGrotesque-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url('/assets/fonts/BrandonGrotesque-Light.eot');
      src: url('/assets/fonts/BrandonGrotesque-Light.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/BrandonGrotesque-Light.woff2') format('woff2'),
          url('/assets/fonts/BrandonGrotesque-Light.woff') format('woff'),
          url('/assets/fonts/BrandonGrotesque-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url('/assets/fonts/BrandonGrotesque-Black.eot');
      src: url('/assets/fonts/BrandonGrotesque-Black.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/BrandonGrotesque-Black.woff2') format('woff2'),
          url('/assets/fonts/BrandonGrotesque-Black.woff') format('woff'),
          url('/assets/fonts/BrandonGrotesque-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url('/assets/fonts/BrandonGrotesque-Medium.eot');
      src: url('/assets/fonts/BrandonGrotesque-Medium.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/BrandonGrotesque-Medium.woff2') format('woff2'),
          url('/assets/fonts/BrandonGrotesque-Medium.woff') format('woff'),
          url('/assets/fonts/BrandonGrotesque-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url('/assets/fonts/BrandonGrotesque-Thin.eot');
      src: url('/assets/fonts/BrandonGrotesque-Thin.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/BrandonGrotesque-Thin.woff2') format('woff2'),
          url('/assets/fonts/BrandonGrotesque-Thin.woff') format('woff'),
          url('/assets/fonts/BrandonGrotesque-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url('/assets/fonts/BrandonGrotesque-Regular.eot');
      src: url('/assets/fonts/BrandonGrotesque-Regular.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/BrandonGrotesque-Regular.woff2') format('woff2'),
          url('/assets/fonts/BrandonGrotesque-Regular.woff') format('woff'),
          url('/assets/fonts/BrandonGrotesque-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Futura';
    src: url('/assets/img/FuturaBT-Bold.eot');
    src: url('/assets/img/FuturaBT-Bold.eot?#iefix') format('embedded-opentype'),
        url('/assets/img/FuturaBT-Bold.woff2') format('woff2'),
        url('/assets/img/FuturaBT-Bold.woff') format('woff'),
        url('/assets/img/FuturaBT-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Futura';
      src: url('/assets/img/FuturaBT-Book.eot');
      src: url('/assets/img/FuturaBT-Book.eot?#iefix') format('embedded-opentype'),
          url('/assets/img/FuturaBT-Book.woff2') format('woff2'),
          url('/assets/img/FuturaBT-Book.woff') format('woff'),
          url('/assets/img/FuturaBT-Book.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Futura';
      src: url('/assets/img/FuturaBT-Medium.eot');
      src: url('/assets/img/FuturaBT-Medium.eot?#iefix') format('embedded-opentype'),
          url('/assets/img/FuturaBT-Medium.woff2') format('woff2'),
          url('/assets/img/FuturaBT-Medium.woff') format('woff'),
          url('/assets/img/FuturaBT-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }



`;

export default GlobalStyle;
