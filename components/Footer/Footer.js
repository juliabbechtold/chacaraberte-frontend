import React from "react";
import { Container } from "./style";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <Container>
      <p>©2020 Nome do site. Todos os direitos reservados</p>
      <a
        href="https://agenciaade.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Feito com <FiHeart /> por agenciaade.com.br
      </a>
    </Container>
  );
}
