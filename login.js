// Importar Express
import express from "express";

// Importar el controlador que maneja el inicio de sesión
import { iniciarSesion } from "../controllers/authController.js";

// Crear el enrutador
const router = express.Router();

/**
 * Ruta de autenticación (login)
 */

// Iniciar sesión
// POST /api/login
router.post("/", iniciarSesion);

// Exportar el router para usarlo en server.js
export default router;