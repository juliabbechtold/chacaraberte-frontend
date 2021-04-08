import App from "next/app";
import GlobalStyle from "../styles/global.js";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="" />
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <meta property="og:image" content="/screenshot.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-180421237-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'UA-180421237-2');`,
            }}
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
