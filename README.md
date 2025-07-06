# 🌱 Economia Circular App

Aplicação full-stack com formulário, envio de e-mail, banco de dados e exibição de dados, com tema de economia circular.

## 🔗 Link da Aplicação
- [Frontend (Vercel)](https://front-circular.vercel.app/)
- [Backend (Render)](https://economia-circular-app.onrender.com/api)

## 🖥️ Tecnologias
- React + Vite + Tailwind
- Node.js + Express + SQLite
- Nodemailer para envio de e-mails

## 📦 Rodar localmente

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/economia-circular-app.git
cd economia-circular-app

# Instalar dependências do backend
cd backend
npm install
cp .env.example .env 
node index.js

# Instalar dependências do frontend
cd ../frontend
npm install
npm run dev
