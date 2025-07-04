import { useEffect, useState } from "react";
import { buscarMensagens } from "../services/api";
import "../components/Mensagens.css";

export default function Mensagens() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    buscarMensagens().then(setMensagens);
  }, []);

  return (
    <div className="mensagens-container">
      <h2 className="mensagens-title">Mensagens Recebidas</h2>
      <div className="overflow-x-auto">
        <table className="mensagens-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Mensagem</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {mensagens.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.nome}</td>
                <td>{msg.email}</td>
                <td>{msg.mensagem}</td>
                <td>{new Date(msg.data_envio).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
