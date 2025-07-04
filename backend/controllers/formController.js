import db from '../config/db.js';
import nodemailer from 'nodemailer';

export async function enviarFormulario(req, res) {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Salvar no banco de dados
    await db('mensagens').insert({ nome, email, mensagem });

    // Enviar e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ou outro e-mail de destino
      subject: 'Nova mensagem do formulário',
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    });

    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
}

export async function listarMensagens(req, res) {
  try {
    const mensagens = await db('mensagens').select('*').orderBy('data_envio', 'desc');
    res.status(200).json(mensagens);
  } catch (error) {
    console.error('Erro ao buscar mensagens:', error);
    res.status(500).json({ error: 'Erro ao buscar mensagens.' });
  }
}
