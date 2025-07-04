import express from 'express';
import { enviarFormulario, listarMensagens } from '../controllers/formController.js';

const router = express.Router();

router.post('/formulario', enviarFormulario);
router.get('/dados', listarMensagens);

export default router;
