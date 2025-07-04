import axios from "axios";

const API_URL = "https://economia-circular-app.onrender.com/api"; // ajuste para produção se necessário

export async function enviarFormulario(dados) {
  return axios.post(`${API_URL}/formulario`, dados);
}

export async function buscarMensagens() {
  const res = await axios.get(`${API_URL}/dados`);
  return res.data;
}
