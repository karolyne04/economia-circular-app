import { useState } from "react";
import { enviarFormulario } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Formulario.css";

export default function Formulario() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nome || !form.email.includes("@") || !form.mensagem) {
      setStatus("Preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);

    try {
      await enviarFormulario(form);
      toast.success("Mensagem enviada com sucesso!");
      setForm({ nome: "", email: "", mensagem: "" });
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        name="email"
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
        className="form-input"
      />
      <textarea
        name="mensagem"
        placeholder="Mensagem"
        value={form.mensagem}
        onChange={handleChange}
        required
        className="form-textarea"
      />
      <button type="submit" className="form-btn" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
      <ToastContainer position="top-right" autoClose={3000}/>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
