import { useEffect, useState } from 'react';
import { buscarMensagens } from '../services/api';

export default function TabelaMensagens() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    buscarMensagens().then(setMensagens);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Mensagem</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {mensagens.map((m) => (
          <tr key={m.id}>
            <td>{m.nome}</td>
            <td>{m.email}</td>
            <td>{m.mensagem}</td>
            <td>{new Date(m.data_envio).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
