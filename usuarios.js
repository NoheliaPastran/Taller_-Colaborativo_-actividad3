// Importar Express
import express from "express";

// Importar funciones del controlador de usuarios
import {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} from "../controllers/usuarioController.js";

// Crear el enrutador de Express
const router = express.Router();

/**
 * Rutas disponibles para la gestión de usuarios
 */

// Registrar un nuevo usuario
// POST /api/usuarios/registrar
router.post("/registrar", registrarUsuario);

// Obtener todos los usuarios
// GET /api/usuarios/
router.get("/", obtenerUsuarios);

// Obtener un usuario por su ID
// GET /api/usuarios/:id
router.get("/:id", obtenerUsuarioPorId);

// Actualizar usuario
// PUT /api/usuarios/:id
router.put("/:id", actualizarUsuario);

// Eliminar usuario
// DELETE /api/usuarios/:id
router.delete("/:id", eliminarUsuario);

// Exportar las rutas para que el servidor pueda usarlas
export default router;