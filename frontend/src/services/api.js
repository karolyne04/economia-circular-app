import axios from "axios";

const API_URL = "http://localhost:3000/api"; // ajuste para produção se necessário

export async function enviarFormulario(dados) {
  return axios.post(`${API_URL}/formulario`, dados);
}

export async function buscarMensagens() {
  const res = await axios.get(`${API_URL}/dados`);
  return res.data;
}
