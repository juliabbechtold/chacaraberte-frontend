import React from "react";
import Head from "next/head";

import { Container } from "../styles/home.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Agência Ade! Publicidade e Propaganda em Ponta Grossa - PR
        </title>
        <meta
          name="description"
          content="Agência de Publicidade e Propaganda em Ponta Grossa - PR. Criação de marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          name="keywords"
          content="marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "/screenshot.png"}
        />
      </Head>
      <Container>
        <img src="/assets/logo.svg" width="200px" alt="Agência Ade!" />
      </Container>
    </>
  );
}
