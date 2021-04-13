import React from "react";
import { Container } from "./style";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <a
        href="https://agenciaade.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ©2021 Chácara Berté criado com <FaHeart />, ADE!
      </a>
    </Container>
  );
}
