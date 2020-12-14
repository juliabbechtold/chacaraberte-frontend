import axios from "axios";

const api = axios.create({
  baseURL: "https://projetos.agenciaade.com.br/nome-do-projeto/wp-json/v2/wp",
});

export default api;
