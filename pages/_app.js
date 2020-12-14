import App from "next/app";
import GlobalStyle from "../styles/global.js";
import { Helmet } from "react-helmet";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="" />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:image" content="/screenshot.png" />
        </Helmet>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
